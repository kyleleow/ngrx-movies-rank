import { Movie } from '../models/movie.model';
import * as MovieSelectors from './movie.selector';

describe('Selectors', () => {
    const initialState: Movie[] = [
        { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url'},
        { id: 2, title: 'second movie', rating: 2, posterUrl: 'second url'}
    ];

    it('should select the movie list', () => {
        const result = MovieSelectors.selectMovieFeature.projector(initialState);
        expect(result.length).toBe(2);
        expect(result[1].id).toBe(2);
    });

    it('should select books by descending rating', () => {
        const initialDescendingState = initialState.slice().reverse();
        const result = MovieSelectors.selectMovieByDescendingRating.projector(initialDescendingState);
        expect(result[0].rating).toBe(2);
    });
});

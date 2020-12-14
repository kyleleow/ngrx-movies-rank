import { Movie } from '../models/movie.model';
import * as fromReducer from './movie.reducer';
import * as fromAction from '../actions/list-page.actions';

describe('MovieReducer', () => {
    it('should return initialState for unknown action', () => {
        const { initialState } = fromReducer;
        const action = {
            type: 'unknown'
        };
        const state = fromReducer.movieReducer(initialState, action);

        expect(state).toBe(initialState);
    });

    it('should update the states in immutable way after loading successfully', () => {
        const { initialState } = fromReducer;
        const newState: Movie[] = [
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' }
        ];
        const action = fromAction.moviesLoadSuccessfully({payload: newState});
        const state = fromReducer.movieReducer(initialState, action);

        expect(state).toEqual(newState); // value check
        expect(state).not.toBe(newState); // reference check
    });

    it('should rate at least one item randomly', () => {
        const { initialState } = fromReducer;
        const newState: Movie[] = [
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' },
            { id: 1, title: 'first movie', rating: 1, posterUrl: 'first url' }
        ];
        const loadAction = fromAction.moviesLoadSuccessfully({payload: newState});
        const stateAfterLoad = fromReducer.movieReducer(initialState, loadAction);

        const rateAction = fromAction.rateRandomMovies({ movies: stateAfterLoad });
        const stateAfterRate = fromReducer.movieReducer(stateAfterLoad, rateAction);

        expect(stateAfterRate).not.toEqual(initialState);
        expect(stateAfterRate).not.toBe(initialState);
    });
});

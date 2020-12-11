import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export interface AppState {
    movies: Movie[];
}

export const selectMovieFeature = (state: AppState) => state.movies;

export const selectMovieByDescendingRating = createSelector(
    selectMovieFeature,
    (movies: Movie[]) => {
        return movies.sort(compareRatingInDescending);
    }
);

export const compareRatingInDescending = (a: Movie, b: Movie) => {
    if (a.rating > b.rating) {
        return -1;
    }
    else if (a.rating < b.rating) {
        return 1;
    }
    else {
        return 0;
    }
};

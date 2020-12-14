import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { compareRateInDescending } from '../utilities';

export interface AppState {
    movies: Movie[];
}

export const selectMovieFeature = createFeatureSelector<
    AppState,
    Movie[]
>('movies');

export const selectMovieByDescendingRating = createSelector(
    selectMovieFeature,
    (movies: Movie[]) => {
        return movies.sort(compareRateInDescending);
    }
);

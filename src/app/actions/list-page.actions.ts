import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const rateAllMovies = createAction(
  '[List Page] Rate All Movies',
  props<{ movies: Movie[] }>()
);

export const rateRandomMovies = createAction(
  '[List Page] Rate Random Movies',
  props<{ movies: Movie[] }>()
);

export const loadMovies = createAction('[List Page] Load Movies');

export const moviesLoadSuccessfully = createAction(
  '[Movies API] Movies Loaded Successfully',
  props<{ payload: Movie[] }>()
);

export const rateMovie = createAction(
  '[List Page] Rate Single Movie',
  props<{ payload: Movie}>()
);

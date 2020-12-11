import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const rateMovies = createAction(
  '[List Page] Rate Movies',
  props<{ movies: Movie[] }>()
);

export const loadMovies = createAction('[List Page] Load Movies');

export const moviesLoadSuccessfully = createAction(
  '[Movies API] Movies Loaded Successfully',
  props<{ payload: Movie[] }>()
);

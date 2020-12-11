import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const rateMovies = createAction(
  '[List Page] Rate',
  props<{ movies: Movie[] }>()
);

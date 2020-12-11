import {
  createReducer,
  on
} from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as ListPageActions from '../actions/list-page.actions';

export const initialState: Movie[] = [];

export const movieReducer = createReducer(
  initialState,
  on(ListPageActions.rateMovies, state => {
    return state.map(movie => ({...movie, rating: Math.floor(Math.random() * 10) + 1}));
  }),
  on(ListPageActions.moviesLoadSuccessfully, (state, {payload}) => payload)
);


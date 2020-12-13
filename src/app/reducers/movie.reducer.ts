import {
  createReducer,
  on
} from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as ListPageActions from '../actions/list-page.actions';
import { getRandomInteger, getRandomIntegerArray } from '../utilities';

export const initialState: Movie[] = [];

export const movieReducer = createReducer(
  initialState,
  on(ListPageActions.rateAllMovies, state => state.map(movie => ({...movie, rating: Math.floor(Math.random() * 10) + 1}))),
  on(ListPageActions.moviesLoadSuccessfully, (state, {payload}) => payload),
  on(ListPageActions.rateRandomMovies, state => {
    const randomElements = getRandomIntegerArray(state, getRandomInteger());
    return state.map(movie => {
      const elementToRate = randomElements.find(ele => ele.id === movie.id);
      if (elementToRate) {
        return {...elementToRate, rating: Math.floor(Math.random() * 10) + 1};
      }
      else {
        return {...movie};
      }
    });
  })
);


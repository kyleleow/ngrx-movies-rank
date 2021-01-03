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
  on(ListPageActions.rateMovie, (state, {payload}) => state.map(movie => {
    if (movie.id === payload.id) {
      return {...movie, rating: payload.rating}
    }
    else {
      return {...movie}
    }
  })),
  on(ListPageActions.rateAllMovies, state => state.map(movie => ({...movie, rating: Math.floor(Math.random() * 10) + 1}))),
  on(ListPageActions.moviesLoadSuccessfully, (state, {payload}) => payload.slice()),
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


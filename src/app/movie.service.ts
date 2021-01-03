import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './models/movie.model';
import * as MovieSelectors from './selectors/movie.selector';
import { compareRateInDescending } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private store: Store<{ movies: Movie[] }>
  ) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('./assets/movies.json');
  }

  getMoviesByState(): Observable<Movie[]> {
    return this.store.select(MovieSelectors.selectMovieFeature);
  }

  getMoviesByDescendingRate(): Observable<Movie[]> {
    return this.getMoviesByState().pipe(
      map(movies => {
        return movies.slice().sort(compareRateInDescending);
      }),
      map(movies => movies.map(movie => ({...movie}))) //clone
    );
  }
}

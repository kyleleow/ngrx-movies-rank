import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './models/movie.model';
import * as MovieSelectors from './selectors/movie.selector';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private store: Store<{ movies: Movie[] }>
  ) { }

  randomRating = new Subject<boolean>();

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('../assets/movies.json');
  }

  getMoviesByState(): Observable<Movie[]> {
    return this.store.select(MovieSelectors.selectMovieFeature);
  }

  getMoviesByDescendingRate(): Observable<Movie[]> {
    return this.getMoviesByState().pipe(
      map(movies => {
        return movies.slice().sort(this.compareRateInDescending);
      })
    );
  }

  compareRateInDescending(a: Movie, b: Movie): number {
    if (a.rating > b.rating) {
        return -1;
    }
    else if (a.rating < b.rating) {
        return 1;
    }
    else {
        return 0;
    }
  }

  setRandomRating(start: boolean): void {
    this.randomRating.next(start);
  }

  randomRating$(): Observable<boolean> {
    return this.randomRating.asObservable();
  }
}

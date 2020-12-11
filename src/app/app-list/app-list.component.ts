import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  constructor(
    private store: Store<{ movies: Movie[] }>,
    private movieService: MovieService
  ) { }

  movies$: Observable<Movie[]> = this.movieService.getMoviesByDescendingRate();

  ngOnInit(): void {
    this.store.dispatch({ type: '[List Page] Load Movies' });
  }

  startRandomRate(): void {
    this.store.dispatch({ type: '[List Page] Rate Movies' });
  }
}

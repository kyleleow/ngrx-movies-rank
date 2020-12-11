import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  constructor(private store: Store<{ movies: Movie[] }>) { }

  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  ngOnInit(): void {
    this.store.dispatch({ type: '[List Page] Load Movies'});
  }
}

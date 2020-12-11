import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit {

  constructor() { }

  @Input() item: Movie = {} as Movie;
  maxRating = 10;
  
  ngOnInit(): void {
  }

}

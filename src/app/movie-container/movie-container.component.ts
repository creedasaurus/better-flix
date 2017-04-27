import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../movies/movie';


@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})

export class MovieContainerComponent implements OnInit {

  public _movies: Movie[] = [];

  @Input()
  set movies(movArr: Movie[]) {
    this._movies = movArr;
  }
  get movies() {
    return this._movies;
  }

  toggleTableView = true;

  constructor() {}

  ngOnInit() { }

}

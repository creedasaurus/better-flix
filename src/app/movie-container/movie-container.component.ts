import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../movies/movie';


@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})

export class MovieContainerComponent implements OnInit, OnChanges {

  public _movies: Movie[];

  @Input()
  set movies(movArr: Movie[]) {
    // console.log(movArr);
    this._movies = movArr || [];
  }
  get movies() {
    return this._movies;
  }

  toggleTableView = true;

  constructor() {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['movies']);
  }
}

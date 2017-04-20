import {Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MovieCardComponent {
  private _movie: Movie;

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
  }
  get movie(): Movie {
    return this._movie;
  }

  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.movieService.selectMov(movie);
  }
  constructor(private movieService: MoviesService) {}
}

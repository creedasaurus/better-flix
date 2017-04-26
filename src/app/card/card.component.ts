import {Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-movie-card',
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

  clickWatchedButton(movie: Movie) {
    this.movieService.addToWatched(movie);
  }
  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.movieService.selectMov(movie);
  }
  constructor(private movieService: MoviesService) {}
}

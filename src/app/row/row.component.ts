import { Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-movie-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})

export class MovieRowComponent {
  private _movie: Movie;

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
  }
  get movie(): Movie {
    return this._movie;
  }

  clickDislikeButton(movie: Movie) {
    this.movieService.disliked(movie);
  }

  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.movieService.selectMov(movie);
  }
  constructor(private movieService: MoviesService) {}
}

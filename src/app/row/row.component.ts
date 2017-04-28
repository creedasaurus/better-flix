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

  clickWatchedButton(movie: Movie) {
    this.movieService.watched(movie);
  }

  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.movieService.selectMov(movie);
  }
  constructor(private movieService: MoviesService) {}
}

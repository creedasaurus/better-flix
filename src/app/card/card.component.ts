import { Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MovieCardComponent {
  private _movie: Movie;
  expand: number;
  liked: boolean;

  @Input()
  set movie(movie: Movie) {
    this._movie = movie;
  }
  get movie(): Movie {
    return this._movie;
  }

  toggleExpand(selected: number) {
    if (this.expand === selected) {
      this.expand = 0;
    } else {
      this.expand = selected;
    }
  }

  clickWatchedButton(movie: Movie) {
    this.liked = false;
    this.movieService.watched(movie);
  }

  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.liked = true;
    this.movieService.slctdMovie = movie;
  }
  constructor(private movieService: MoviesService) {}
}

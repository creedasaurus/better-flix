import { Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MovieCardComponent {
  private _movie: Movie;
  expand: number;
  liked = false;
  thumb_up_clicked = '';

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
    this.snackbar.open(`Removed from Suggestions: ${movie.Title}`, 'UNDO', {
      duration: 3000,
    });
  }

  clickLikeButton(movie: Movie) {
    console.log(movie);
    this.liked = !this.liked;
    if (this.thumb_up_clicked === '') {
      this.thumb_up_clicked = 'gold';
    } else {
      this.thumb_up_clicked = '';
    }
    this.movieService.slctdMovie = movie;
  }
  constructor(
    private movieService: MoviesService,
    private snackbar: MdSnackBar
  ) {}
}

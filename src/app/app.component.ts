import {Component, OnInit} from '@angular/core';
import { Movie } from './movies/movie';
import { MoviesService } from './movies/movies.service';


@Component({
  providers: [MoviesService],
  selector: 'movie-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  getMovieList(): void {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit(): void {
    this.getMovieList();
  }

  constructor(private movieService: MoviesService) {}
}

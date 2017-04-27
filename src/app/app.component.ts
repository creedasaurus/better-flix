import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Movie } from './movies/movie';
import { MoviesService } from './movies/movies.service';


@Component({
  selector: 'app-better-flix',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _movies: Movie[];
  selectedMovie: Movie;
  subscription: Subscription;

  constructor(public movieService: MoviesService) {
    this.subscription = movieService.movieSelected$.subscribe(
      movie => { this.selectedMovie = movie; }
    );
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe( movies => this._movies = movies );
  }

  testButton() {
    console.log(this._movies.pop());
  }

  // Initialization (runs once)
  ngOnInit() {
    console.log('in init of app component');
    this.getMovies();
  }
}

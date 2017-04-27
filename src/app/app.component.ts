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
  _movies: Movie[] = [];
  _watchedMovies: Movie[] = [];
  selectedMovie: Movie;

  constructor(public movieService: MoviesService) {
    // TODO: Every time a movie is selected (no purpose for this currently)
    movieService.movieSelected$.subscribe(
      movie => { this.selectedMovie = movie; }
    );

    // Adds a 'watched' movie to local array
    movieService.watchedMovie$.subscribe(
      movie => {
        this._watchedMovies.push(movie);
        this._movies = this._movies.filter(mov => mov.id !== movie.id);
      }
    );
  }

  getNewMovies() {
    this.movieService.getMovies()
      .subscribe( movies => this._movies = movies );
    this.movieService.getWatched()
      .subscribe(function (watched) {
        this._watchedMovies = watched;
      });
  }

  testButton() {
    // console.log('test button (nothing)');
    console.log(this._watchedMovies[0].id);
  }

  filterWatched() {

  }

  // Initialization (runs once)
  ngOnInit() {
    // console.log('in init of app component');
    this.getNewMovies();

  }
}

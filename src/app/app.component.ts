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
  _dislikedMovies: Movie[] = [];
  selectedMovie: Movie;
  cardsView = true;
  filter: Object;
  order: string;

  onViewChange(cardsView: boolean) {
    cardsView ? this.cardsView = true : this.cardsView = false;
  }

  constructor(public movieService: MoviesService) {
    // TODO: Every time a movie is selected (no purpose for this currently)
    movieService.movieSelected$.subscribe(
      movie => { this.selectedMovie = movie; }
    );

    // Adds a 'disliked' movie to local array
    movieService.dislikedMovie$.subscribe( movie => {
      this._dislikedMovies.push(movie);
      this._movies = this._movies.filter(mov => mov.id !== movie.id);
    });

    // undos a 'disliked' movie from local array
    movieService.undoDislikeMovie$.subscribe( movie => {
      this._dislikedMovies = this._dislikedMovies.filter(mov => mov.id !== movie.id);
      this._movies.push(movie);
    });
  }

  getNewMovies() {
    this.movieService.getMovies()
      .subscribe( movies => this._movies = movies );
    this.movieService.getDisliked()
      .subscribe( disliked => this._dislikedMovies = disliked );
  }

  testButton() {
    // console.log('test button (nothing)');
    console.log(this._dislikedMovies);
    alert(localStorage.getItem('liked'));
  }

  filterDisliked() {

  }

  onFilterChanges(filt: Object) {
    // console.log(filt);
    this.filter = filt;
    // console.log(this.filter);
  }

  orderChange(orderBy: string) {
    this.order = orderBy;
  }

  // Initialization (runs once)
  ngOnInit() {
    this.getNewMovies();
  }
}

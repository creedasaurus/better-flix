import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Movie } from './movies/movie';
import { MoviesService } from './movies/movies.service';


@Component({
  selector: 'app-better-flix',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedMovie: Movie;
  subscription: Subscription;

  constructor(public movieService: MoviesService) {
    this.subscription = movieService.movieSelected$.subscribe(
      movie => { this.selectedMovie = movie; }
    );
  }
}

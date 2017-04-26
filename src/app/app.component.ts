import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Movie } from './movies/movie';
import { MoviesService } from './movies/movies.service';


@Component({
  providers: [MoviesService],
  selector: 'app-better-flix',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedMovie: Movie;
  subscription: Subscription;

  constructor(public movieService: MoviesService) {
    // Dark magic -- subscription to the service to keep the selected movie up to date
    this.subscription = movieService.movieSelected$.subscribe(
      movie => { this.selectedMovie = movie; }
    );
  }
}

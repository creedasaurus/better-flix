import { Component } from '@angular/core';
import { Movie } from './movie';

const MOVIES: Movie[] = [
  { id: 1,
    title: "Slappy Tap Dance",
    year_released: new Date('1998-04-04'),
    director: 'Hanz Zimmer',
    description: 'This is such a great movie. Go and check out the latest thing.'
  },
];

@Component({
  selector: 'movie-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heros';
  movies = MOVIES;
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}

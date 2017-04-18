import {Component} from '@angular/core';
import { Movie } from '../movies/movie';


@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class MovieListComponent {
  movies: Movie[];
}

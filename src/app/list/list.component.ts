import {Component, Input} from '@angular/core';
import { Movie } from '../movies/movie';


@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class MovieListComponent {
  @Input() movies: Movie[];
}

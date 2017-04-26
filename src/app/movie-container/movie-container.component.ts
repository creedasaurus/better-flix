import {Component, Input} from '@angular/core';
import { Movie } from '../movies/movie';


@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})

export class MovieContainerComponent {
  @Input() movies: Movie[];
  toggleTableView = true;
  constructor() {}
}

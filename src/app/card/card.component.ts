import {Component, Input } from '@angular/core';
import { Movie } from '../movies/movie';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class MovieCardComponent {
  @Input() movie: Movie;
}

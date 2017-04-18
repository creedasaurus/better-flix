import {Component, Input} from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class MovieCardComponent {
  @Input() movie: string;
}

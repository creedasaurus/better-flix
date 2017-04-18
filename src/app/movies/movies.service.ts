import { Injectable } from '@angular/core';
import { Movie } from './movie';

const MOVIES: Movie[] = [
  { id: 1,
    title: 'Slappy Tap Dance',
    year_released: new Date('1998-04-04'),
    director: 'Hanz Zimmer',
    description: 'This is such a great movie. Go and check out the latest thing.'
  },
  { id: 2,
    title: 'The itchy and scratchy Show',
    year_released: new Date('1991-05-11'),
    director: 'That one guy',
    description: 'Best show of all time. Go see some things.'
  },
  { id: 3,
    title: 'Pooty Tang',
    year_released: new Date('2001-01-01'),
    director: 'Candy Harmon',
    description: 'Just.... just don\'t read into it too much'
  },
];

@Injectable()
export class MoviesService {
  getMovies(): Movie[] {
    return MOVIES;
  }
  constructor() { }
}

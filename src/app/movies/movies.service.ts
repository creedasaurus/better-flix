import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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
    title: 'Rude Booty',
    year_released: new Date('2010-01-01'),
    director: 'Great Guy',
    description: 'One heck of a wow.'
  },
  { id: 4,
    title: 'A credit company',
    year_released: new Date('1959-03-10'),
    director: 'Candy Harmon',
    description: 'Chowder Haws is amazing in this.'
  },
  { id: 5,
    title: 'Robo-Cow 5',
    year_released: new Date('2001-04-01'),
    director: 'Candy Harmon',
    description: 'Another one bites the fender guitar.'
  },
  { id: 6,
    title: 'Roxberries',
    year_released: new Date('2014-01-10'),
    director: 'Dung Harmon',
    description: 'I cant stand up after this'
  },
  { id: 7,
    title: 'Poetry Tang',
    year_released: new Date('1983-08-01'),
    director: 'Buzz Dude',
    description: 'There aint a movie in the world as good'
  }
];

@Injectable()
export class MoviesService {
  private selectedMovieSource = new Subject<Movie>();
  // Weird dark magic stuff that I don't fully understand ^v^v
  movieSelected$ = this.selectedMovieSource.asObservable();

  selectMov(movie: Movie) {
    this.selectedMovieSource.next(movie);
  }

  getMovies(): Movie[] {
    return MOVIES;
  }
  constructor() { }
}

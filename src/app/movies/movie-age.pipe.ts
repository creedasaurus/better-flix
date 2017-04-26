import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({name: 'movieAge'})


/*
* This could potentially be a way we could filter movies locally that someone has already 'watched'
* */
export class MovieAgePipe implements PipeTransform {
  transform(movies: Movie[], oldest: string): Movie[] {
    // converts string to date for a comparison
    return movies.filter(mov => mov.year_released >= new Date(oldest));
  }
}

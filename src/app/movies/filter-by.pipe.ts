import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(movies: Movie[], filter?: any): any {
    if (!filter) {
      return movies;
    } else {
      // Switch in case we end up adding some shiz.
      switch (filter['filter']) {
        case 'Genre': {
          return movies.filter(mov => mov[filter['filter']].startsWith(filter['specFilt']));
        }
        case 'Rated': {
          return movies.filter(mov => mov[filter['filter']] === filter['specFilt']);
        }
        case 'Type': {
          return movies.filter(mov => mov[filter['filter']] === filter['specFilt']);
        }
      }
    }

  }

}

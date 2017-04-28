import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  orderStrings(a: string, b: string) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  orderDates(a: string, b: string) {
    if (Date.parse(a) < Date.parse(b)) {
      return -1;
    }
    if (Date.parse(a) > Date.parse(b)) {
      return 1;
    }
    return 0;
  }

  transform(movies: Movie[], args?: any): any {
    console.log('in ordery');
    return movies.sort();
  }

}

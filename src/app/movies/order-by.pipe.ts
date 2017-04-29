import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  orderingMap: Object = {
    Title: this.orderStrings,
    Released: this.orderDates,
    Genre: this.orderStrings
  };

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
    if (Date.parse(a) > Date.parse(b)) {
      return -1;
    }
    if (Date.parse(a) < Date.parse(b)) {
      return 1;
    }
    return 0;
  }

  transform(movies: Movie[], order?: string): Movie[] {
    if (!order) {
      return movies;
    } else {
      if (order === 'Score') {
        return movies;
      }
      return movies.sort((mov1, mov2) => this.orderingMap[order](mov1[order], mov2[order]));
    }
}
}

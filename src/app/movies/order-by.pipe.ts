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

  averageScore(mov: Movie): number {
    const scores = [
      parseFloat(mov.imdbRating) * 10,
      parseInt(mov.Metascore, 10),
      parseInt(mov.rottentomatoes, 10)
    ].filter(num => !isNaN(num));
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

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
    return Date.parse(a) - Date.parse(b);
  }

  orderAverageScores(a: Movie, b: Movie) {
    return this.averageScore(a) - this.averageScore(b);
  }

  transform(movies: Movie[], order?: string): Movie[] {
    if (!order) {
      return movies;
    } else {
      if (order === 'Score') {
        return movies.sort((mov1, mov2) => this.orderAverageScores(mov1, mov2));
      }
      return movies.sort((mov1, mov2) => this.orderingMap[order](mov1[order], mov2[order]));
    }
}
}

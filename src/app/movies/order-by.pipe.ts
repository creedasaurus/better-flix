import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(movies: Movie[], args?: any): any {
    console.log('in ordery');
    return movies.sort(function(mov1, mov2) {
      if (mov1.Title.toLowerCase() < mov2.Title.toLowerCase()) {
        return -1;
      }

      if (mov1.Title.toLowerCase() > mov2.Title.toLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

}

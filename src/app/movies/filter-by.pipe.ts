import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(movies: Movie[], args?: any): any {
    if (!args) {
      return [];
    } else {
      return movies.filter(mov => mov[args]);
      // console.log(args);

      // return [{
      //           id: 5,
      //           Title: "La La Land",
      //           Year: "2016",
      //           Rated: "PG-13",
      //           Released: "25 Dec 2016",
      //           Runtime: "128 min",
      //           Genre: "Comedy, Drama, Music",
      //           Director: "Damien Chazelle",
      //           Writer: "Damien Chazelle",
      //           Actors: "Ryan Gosling, Emma Stone, Amiée Conn, Terry Walters",
      //           Plot: "A jazz pianist falls for an aspiring actress in Los Angeles.",
      //           Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
      //           Metascore: "93",
      //           imdbRating: "8.3",
      //           imdbID: "tt3783958",
      //           rottentomatoes: "93%"
      //         }
      //         ];
    }
  }
}

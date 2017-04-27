import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Movie } from './movie';


@Injectable()
export class MoviesService {
  private selectedMovieSource = new Subject<Movie>();
  movieSelected$ = this.selectedMovieSource.asObservable();

  private serverURL = 'http://localhost:5000/api/v1';
  public watchedMovies = [];
  public slctdMovie: Movie;

  // Constructor
  constructor(private http: Http) {}

  // Gets Movies from the server
  getMovies(): Observable<Movie[]> {
    const things = this.http.get(this.serverURL + '/movies.json')
          .map(function (res) {
            console.log(res.json());
            // res.json().forEach(thing => console.log(thing));
            return res.json().map(mov => <Movie>mov);
          });
    console.log(things);
    return things;
  }

  // TODO: Will push a new movie to the server for the user.
  addToWatched(movie: Movie) {

  }

  // selects a movie
  selectMov(movie: Movie) {
    this.selectedMovieSource.next(movie);
  }


  // Simplifies extracting data from the server response
  private extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body.data as Movie[];
  }
}

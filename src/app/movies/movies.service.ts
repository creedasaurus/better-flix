import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Movie } from './movie';


@Injectable()
export class MoviesService {
  private selectedMovieSource = new Subject<Movie>();
  movieSelected$ = this.selectedMovieSource.asObservable();
  private dislikedMovieSource = new Subject<Movie>();
  dislikedMovie$ = this.dislikedMovieSource.asObservable();
  private undoDislikeMovieSource = new Subject<Movie>();
  undoDislikeMovie$ = this.undoDislikeMovieSource.asObservable();

  private serverURL = '/api/v1';
  public dislikedMovies = [];
  public slctdMovie: Movie;
  public l_disliked: Array<string> = [];
  public l_liked: Array<string> = [];


  // Gets Movies from the server
  getMovies(): Observable<Movie[]> {
    return this.http.get(this.serverURL + '/new/movies.json')
          .map(function (res) {
            return res.json().map(mov => <Movie>mov);
          });
  }

  getDisliked(): Observable<Movie[]> {
    return this.http.get(this.serverURL + '/my/movies.json')
          .map(function (res) {
            return res.json().map(mov => <Movie>mov);
          });
  }

  disliked(movie: Movie) {
    console.log(`Dislike ${movie.Title}`);
    // console.log('pushing to server and updating observable');
    this.addToDisliked(movie);
    this.dislikedMovieSource.next(movie);

  }

  undoDisliked(movie: Movie) {
    console.log(`undo Dislike of ${movie.Title}`);
    console.log('pushing to server and updating observable');
    this.removeFromDisliked(movie);
    this.undoDislikeMovieSource.next(movie);
  }

  // TODO: Will push a new movie to the server for the user.
  addToDisliked(movie: Movie) {
    console.log('pushing movie to server DB');
    this.http.post(this.serverURL + '/disliked', movie).subscribe();
  }

  addToLiked(movId: string) {
    let likedIds = localStorage.getItem('liked');


  }

  removeFromDisliked(movie: Movie) {
    console.log(`undo < ${movie.Title} > from disliked movies (not connected to server at the moment)`);
  }

  // selects a movie
  selectMov(movie: Movie) {
    this.selectedMovieSource.next(movie);
  }

  getLocalStorage() {
    if (!localStorage.liked) {
      console.log('creating liked local storage');
      localStorage.setItem('liked', JSON.stringify([]));
    }

    if (!localStorage.disliked) {
      console.log('creating disliked local storage');
      localStorage.setItem('disliked', JSON.stringify([]));
    }

    this.l_liked = localStorage.liked;
    console.log(this.l_liked);
    this.l_disliked = localStorage.disliked;
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  // Constructor
  constructor(private http: Http) {
    this.getLocalStorage();
    // FOR DEBUGGING, RUN THIS TO CLEAR
    // this.clearLocalStorage();
  }
}

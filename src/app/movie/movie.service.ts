import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Movie[]> {
    const mapMovies = map((objs: any) => objs.map(obj => new Movie(obj)));
    return mapMovies(this.httpClient.get(this.baseUrl + '/movies'));
  }

  search(title: string): Observable<Movie[]> {
    const mapMovies = map((objs: any) => objs.map(obj => new Movie(obj)));
    return mapMovies(this.httpClient.get(this.baseUrl + '/search/' + title));
  }

  add(imdbId: string): Observable<Movie> {
    const createMovieDto = {imdbId};
    const mapMovie = map((obj: any) => new Movie(obj));
    return mapMovie(this.httpClient.post(this.baseUrl + '/movies', createMovieDto));
  }

}

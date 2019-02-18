import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/movies');
  }

}

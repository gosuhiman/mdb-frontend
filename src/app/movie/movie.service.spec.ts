import {of} from 'rxjs';
import {Movie} from './movie';

import {MovieService} from './movie.service';

describe('MovieService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let movieService: MovieService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieService = new MovieService(<any> httpClientSpy);
  });

  it('should return list of movies', () => {
    const movies: Movie[] = [
      new Movie({
        id: 'id-1',
        title: 'title',
        year: 1987
      }),
      new Movie({
        id: 'id-2',
        title: 'other title',
        year: 1967
      }),
    ];

    httpClientSpy.get.and.returnValue(of(movies));

    movieService.list().subscribe(
      result => expect(result).toEqual(movies, 'expected movies')
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});

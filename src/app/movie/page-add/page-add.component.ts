import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  onMoviesFound(movies: Movie[]) {
    this.movies = movies;
  }

  onAdd(imdbId: string) {
    this.movieService.add(imdbId)
      .subscribe((movie: Movie) => {
        console.log('added', movie);
      });
  }

}

import {Component, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.scss']
})
export class PageMovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.list()
      .subscribe((movies: Movie[]) => this.movies = movies);
  }

}

import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-frontend';
  movies: [] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.list()
      .subscribe({
        next: (movies: []) => {
          this.movies = movies;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}

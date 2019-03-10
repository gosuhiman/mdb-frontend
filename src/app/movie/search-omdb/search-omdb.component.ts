import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-search-omdb',
  templateUrl: './search-omdb.component.html',
  styleUrls: ['./search-omdb.component.scss']
})
export class SearchOmdbComponent implements OnInit {
  searchTerm = '';

  @Output() moviesFound = new EventEmitter<Movie[]>();

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.movieService.search(this.searchTerm)
      .subscribe((movies: Movie[]) => this.moviesFound.emit(movies));
  }

}

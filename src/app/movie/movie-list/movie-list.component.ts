import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() displayAdd = false;
  @Output() add = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddClick(imdbId: string) {
    this.add.emit(imdbId);
  }
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MovieListComponent} from './movie-list/movie-list.component';
import {PageAddComponent} from './page-add/page-add.component';
import {PageMovieListComponent} from './page-movie-list/page-movie-list.component';
import {movieRoutes} from './routes';
import {SearchOmdbComponent} from './search-omdb/search-omdb.component';


@NgModule({
  declarations: [
    MovieListComponent,
    PageMovieListComponent,
    PageAddComponent,
    SearchOmdbComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(movieRoutes),
  ],
  exports: []
})
export class MovieModule {
}

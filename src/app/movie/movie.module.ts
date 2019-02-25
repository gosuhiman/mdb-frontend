import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {PageMovieListComponent} from './page-movie-list/page-movie-list.component';
import {movieRoutes} from './routes';


@NgModule({
  declarations: [
    MovieListComponent,
    PageMovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(movieRoutes),
  ],
  exports: [
  ]
})
export class MovieModule {
}

import {Routes} from '@angular/router';
import {PageAddComponent} from './page-add/page-add.component';
import {PageMovieListComponent} from './page-movie-list/page-movie-list.component';

export const movieRoutes: Routes = [
  {path: 'list', component: PageMovieListComponent},
  {path: 'add', component: PageAddComponent},
];

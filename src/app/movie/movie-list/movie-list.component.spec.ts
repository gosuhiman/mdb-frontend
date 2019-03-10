import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import {PageAddComponent} from '../page-add/page-add.component';
import {PageMovieListComponent} from '../page-movie-list/page-movie-list.component';
import {movieRoutes} from '../routes';
import {SearchOmdbComponent} from '../search-omdb/search-omdb.component';

import {MovieListComponent} from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent,
        PageMovieListComponent,
        PageAddComponent,
        SearchOmdbComponent
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        RouterModule.forRoot(movieRoutes),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

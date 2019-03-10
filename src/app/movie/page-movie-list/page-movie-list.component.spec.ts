import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {PageAddComponent} from '../page-add/page-add.component';
import {movieRoutes} from '../routes';
import {SearchOmdbComponent} from '../search-omdb/search-omdb.component';

import {PageMovieListComponent} from './page-movie-list.component';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

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
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

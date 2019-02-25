import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import {PageMovieListComponent} from '../page-movie-list/page-movie-list.component';
import {movieRoutes} from '../routes';

import {MovieListComponent} from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent,
        PageMovieListComponent
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
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

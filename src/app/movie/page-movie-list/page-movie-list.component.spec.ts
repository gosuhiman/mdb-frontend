import {HttpClientModule} from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {movieRoutes} from '../routes';

import { PageMovieListComponent } from './page-movie-list.component';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieListComponent,
        PageMovieListComponent
      ],
      imports: [
        HttpClientModule,
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

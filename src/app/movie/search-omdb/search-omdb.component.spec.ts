import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOmdbComponent } from './search-omdb.component';

describe('SearchOmdbComponent', () => {
  let component: SearchOmdbComponent;
  let fixture: ComponentFixture<SearchOmdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOmdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllBooksComponent } from './fetch-all-books.component';

describe('FetchAllBooksComponent', () => {
  let component: FetchAllBooksComponent;
  let fixture: ComponentFixture<FetchAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchAllBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

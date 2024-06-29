import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchEachBookComponent } from './fetch-each-book.component';

describe('FetchEachBookComponent', () => {
  let component: FetchEachBookComponent;
  let fixture: ComponentFixture<FetchEachBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchEachBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchEachBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

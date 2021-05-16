import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPinComponent } from './search-by-pin.component';

describe('SearchByPinComponent', () => {
  let component: SearchByPinComponent;
  let fixture: ComponentFixture<SearchByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

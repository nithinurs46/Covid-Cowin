import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByDistrictComponent } from './search-by-district.component';

describe('SearchByDistrictComponent', () => {
  let component: SearchByDistrictComponent;
  let fixture: ComponentFixture<SearchByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

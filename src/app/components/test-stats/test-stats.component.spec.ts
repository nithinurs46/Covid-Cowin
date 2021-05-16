import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStatsComponent } from './test-stats.component';

describe('TestStatsComponent', () => {
  let component: TestStatsComponent;
  let fixture: ComponentFixture<TestStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

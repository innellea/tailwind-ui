import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDayViewComponent } from './calender-day-view.component';

describe('CalenderDayViewComponent', () => {
  let component: CalenderDayViewComponent;
  let fixture: ComponentFixture<CalenderDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInnerComponent } from './events-inner.component';

describe('EventsInnerComponent', () => {
  let component: EventsInnerComponent;
  let fixture: ComponentFixture<EventsInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

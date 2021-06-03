import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishOfDayComponent } from './dish-of-day.component';

describe('DishOfDayComponent', () => {
  let component: DishOfDayComponent;
  let fixture: ComponentFixture<DishOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

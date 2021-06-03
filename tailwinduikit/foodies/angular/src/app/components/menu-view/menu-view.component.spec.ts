import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewComponent } from './menu-view.component';

describe('MenuViewComponent', () => {
  let component: MenuViewComponent;
  let fixture: ComponentFixture<MenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

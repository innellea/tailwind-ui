import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualEventsSponsersComponent } from './virtual-events-sponsers.component';

describe('VirtualEventsSponsersComponent', () => {
  let component: VirtualEventsSponsersComponent;
  let fixture: ComponentFixture<VirtualEventsSponsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualEventsSponsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualEventsSponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

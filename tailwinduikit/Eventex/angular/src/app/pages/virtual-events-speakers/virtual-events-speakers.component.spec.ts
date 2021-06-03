import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualEventsSpeakersComponent } from './virtual-events-speakers.component';

describe('VirtualEventsSpeakersComponent', () => {
  let component: VirtualEventsSpeakersComponent;
  let fixture: ComponentFixture<VirtualEventsSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualEventsSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualEventsSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeadingComponent } from './about-heading.component';

describe('AboutHeadingComponent', () => {
    let component: AboutHeadingComponent;
    let fixture: ComponentFixture<AboutHeadingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutHeadingComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutHeadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

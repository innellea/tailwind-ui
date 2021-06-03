import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHeadingComponent } from './pricing-heading.component';

describe('PricingHeadingComponent', () => {
    let component: PricingHeadingComponent;
    let fixture: ComponentFixture<PricingHeadingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PricingHeadingComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PricingHeadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesInnerComponent } from './resources-inner.component';

describe('ResourcesInnerComponent', () => {
    let component: ResourcesInnerComponent;
    let fixture: ComponentFixture<ResourcesInnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResourcesInnerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourcesInnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

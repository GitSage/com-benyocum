import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadTermsAndConditionsComponent } from './bad-terms-and-conditions.component';

describe('BadTermsAndConditionsComponent', () => {
  let component: BadTermsAndConditionsComponent;
  let fixture: ComponentFixture<BadTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

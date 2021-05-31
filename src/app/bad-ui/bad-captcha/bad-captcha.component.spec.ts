import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadCaptchaComponent } from './bad-captcha.component';

describe('BadCaptchaComponent', () => {
  let component: BadCaptchaComponent;
  let fixture: ComponentFixture<BadCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadUiComponent } from './bad-ui.component';

describe('BadUiComponent', () => {
  let component: BadUiComponent;
  let fixture: ComponentFixture<BadUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailCardComponent } from './button-detail-card.component';

describe('ButtonDetailCardComponent', () => {
  let component: ButtonDetailCardComponent;
  let fixture: ComponentFixture<ButtonDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButton } from './card-button';

describe('CardButton', () => {
  let component: CardButton;
  let fixture: ComponentFixture<CardButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoxoButton } from './card-roxo-button';

describe('CardRoxoButton', () => {
  let component: CardRoxoButton;
  let fixture: ComponentFixture<CardRoxoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRoxoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoxoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

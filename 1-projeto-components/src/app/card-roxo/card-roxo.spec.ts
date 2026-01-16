import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoxo } from './card-roxo';

describe('CardRoxo', () => {
    let component: CardRoxo;
    let fixture: ComponentFixture<CardRoxo>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardRoxo],
        }).compileComponents();

        fixture = TestBed.createComponent(CardRoxo);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

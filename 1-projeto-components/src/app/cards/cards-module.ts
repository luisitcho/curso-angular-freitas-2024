import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card } from '../../app/card/card';
import { CardRoxo } from '../../app/card-roxo/card-roxo';
import { CardButton } from '../../app/card-button/card-button';
import { CardRoxoButton } from '../../app/card-roxo-button/card-roxo-button';

@NgModule({
    declarations: [Card, CardRoxo, CardButton, CardRoxoButton],
    imports: [CommonModule],
    exports: [Card, CardRoxo, CardButton, CardRoxoButton],
})
export class CardsModule {}

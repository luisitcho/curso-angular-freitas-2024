import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: false,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    // encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
    tipo: string = 'Simples';
    preco: string = (100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    getFullPrice() {

        return `${this.preco}/Mês`;
    }

    plano = {
        tipo: 'Simples',
        preco: (100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        getFullPrice() {

            return `${this.preco}/Mês`;
        }
    }

    @Input('playType') playType: string = '';
    @Input({ alias: 'playPrice', required: true }) playPrice!: string;

    buttonClicked(e: boolean) {
        console.log(e)
        console.log(`Button clicked! ${Math.random()}`);
    }
}

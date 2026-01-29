import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: false,
    templateUrl: './card.html',
    styleUrl: './card.scss',
})
export class Card {
    plano = {
        tipo: 'Simples',
        preco: Number(100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        get_preco(): string {
            return `${this.preco}/Mês`;
        },
    };
}

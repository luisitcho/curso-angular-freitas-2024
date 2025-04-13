import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = '1-progeto-components';

    cardPlanType = 'Simples';
    cardPlanPrice = `${(100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}/Mês`;
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-card-button',
    standalone: false,
    //   templateUrl: './card-button.component.html',
    template: `
        <div class="card-button cursor-pointer p-2">Adquirir</div>
    `,
    styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

}

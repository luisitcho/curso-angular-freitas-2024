import { Component } from '@angular/core';

@Component({
    selector: 'app-card-button-cancel',
    standalone: false,
    templateUrl: './card-button-cancel.html',
    styles: [
        `
            .card-cancel-button {
                font-size: 16px;
                text-align: center;
                margin-top: 10px;
                border-radius: 25px;
                background-color: red;
                cursor: pointer;
                font-weight: bold;
                padding: 10px;
            }
        `,
        `
            .card-cancel-button {
                background-color: black;
            }
        `,
    ],
})
export class CardButtonCancel {}

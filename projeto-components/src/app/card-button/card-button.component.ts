import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: `
  //   <div class="card-button">Gordo fumaça de merda</div>
  // `,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<string>();

  onButtonClick() {
    console.log('teste');
    this.buttonClickEmitter.emit('teste');
  }
}

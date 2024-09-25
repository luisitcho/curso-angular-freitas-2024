import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'projeto-eventos';
    inputText = 'Texto Inicial';
    inputType = "text";
    istDisabled = true;
    btnType = "Texto";

    // Exemplos de mudanças dos atributos do input
    enableInput() {
        this.istDisabled = false;
    }

    disableInput() {
        this.istDisabled = true;
    }

    setType() {
        if (this.btnType == 'Texto') {
            this.btnType = 'Senha'
            this.inputType = "password";

        } else {
            this.btnType = 'Texto'
            this.inputType = "text";
        }
    }

    // Exemplpos de eventos no input
    handleInputkeyup(event: KeyboardEvent) {
        const currentText = (event.target as HTMLInputElement).value;
        console.log(currentText);
    }

    handleInputEvent(event: Event) {
        const inputText = (event.target as HTMLInputElement).value;
        console.log(inputText);
    }

    // Exemplo do titulo no botão
    btnTitle = "Titulo do botão";
    btnDisabled = true;

    buttonClick() {
        this.btnTitle = 'Titulo ALTERADO!';
        this.btnDisabled = !this.btnDisabled;
    }

    // Exemplo de style
    btnWidth = '110px';
    btnWidth2 = '120';
    btnBackground = 'red';
    btnStyle = { backgroundColor: 'green', width: '150px' };

    updateObject() {
        this.btnStyle.width = '160px';
    }

    updateObjectCorrent() {
        console.log('updateObjectCorrent');

        this.btnStyle = {
            backgroundColor: 'lightblue', width: '160px'
        }
    }

    updateWidth() {
        this.btnWidth = '120px';
    }

    // Exemplos de classe
    isRed = false;
    isGreen = true;

    invertColors() {
      this.isGreen = !this.isGreen;
      this.isRed = !this.isRed;
    }
}

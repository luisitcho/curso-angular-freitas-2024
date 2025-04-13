import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = '2-projeto-eventos';
    inputText = 'texto inicial';
    inputType = 'text';
    isDisabled = true;

    enableInput() {
        this.isDisabled = false;
    }

    disableInput() {
        this.isDisabled = true;
    }

    setPasswordTypeInput() {
        this.inputType = 'password';
    }

    setTextTypeInput() {
        this.inputType = 'text';
    }

    logInputText() {
        console.log(this.inputText);
    }

    handleInputKeyup(event: KeyboardEvent) {
        console.log((event.target as HTMLInputElement)?.value);
    }

    buttonTitle = 'Clique aqui';
    buttonDisabled = true;

    onButtonClick() {
        this.buttonTitle = `Clicou! ${Math.round(Math.random() * 100)}`;
        this.buttonDisabled = !this.buttonDisabled;
    }

    widthButton1 = '110px';
    widthButton2 = 130;

    stylesObj = {
        width: '160px',
        backgroundColor: 'grey',
    };

    updateStyleObj() {
        console.log('clicou');
        this.stylesObj.width = '170px';
        this.stylesObj.backgroundColor = 'lightblue';
    }

    updateStyleObjCorrect() {
        this.stylesObj = {
            ...this.stylesObj,
            width: '170px',
            backgroundColor: 'lightblue',
        };
        console.log('clicou');

        return this.stylesObj;
    }

    isRedButton = true;
}

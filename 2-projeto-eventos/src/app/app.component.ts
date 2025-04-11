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

    setPasswornTypeInput() {
        this.inputType = 'password';
    }

    setTextTypeInput() {
        this.inputType = 'text';
    }

    logInputText() {
        console.log(this.inputText);
    }
}

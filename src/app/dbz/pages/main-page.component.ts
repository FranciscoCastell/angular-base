import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    // styleUrl: './name.component.scss'
})
export class MainPageConmponent {
    public characters: Character[] = [
        {
            name: 'Krilin',
            power: 1000
        },
        {
            name: 'Son Goku',
            power: 10500
        },
        {
            name: 'Veggeta',
            power: 9500
        }
    ];

    onNewCharacter(character: Character):void {
        this.characters.push(character);
    }
}

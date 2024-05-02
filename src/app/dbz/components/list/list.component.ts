import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Llamado de propiedades (properties)
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 7000
    },
    {
      name: 'Goten',
      power: 7000
    }
  ];
}

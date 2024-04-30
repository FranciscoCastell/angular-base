import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName: string [] = ['Spiderman', 'Iron-man', 'Hulk', 'She Hulk', 'Thor'];
  public eliminado?: string;
  
  removeLastHero():void {
    this.eliminado = this.heroName.pop();
  }

}

import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ssb-list-combatientes',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listaPersonajes: Character[] = [];

  deleteCharacter(index: number): void {
    this.listaPersonajes.splice(index, 1);
  }
}

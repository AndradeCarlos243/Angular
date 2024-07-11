import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ssb-list-combatientes',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listaPersonajes: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id: string | undefined): void {
    if(!id) return console.error('No se ha recibido un id');
    this.onDelete.emit(id);
  }
}

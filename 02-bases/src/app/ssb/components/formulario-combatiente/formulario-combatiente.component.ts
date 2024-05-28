import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ssb-add-combatiente',
  templateUrl: './formulario-combatiente.component.html',
  styleUrl: './formulario-combatiente.component.css'
})
export class FormularioCombatienteComponent {
  public combatiente: Character = {
    name: '',
    franchise: ''
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter() {
    if(this.combatiente.name.trim().length === 0) return;
    if(this.combatiente.franchise.trim().length === 0) return;
    this.onNewCharacter.emit(this.combatiente);
    this.combatiente = {
      name: '',
      franchise: ''
    };
  }
}

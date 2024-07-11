import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { SsbService } from '../services/ssb.service';

@Component({
  selector: 'app-ssb-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  constructor( private ssbService: SsbService) { }

  get personajes(): Character[] {
    return [...this.ssbService.personajes];
  }

  onDeleteCharacter(id: string): void {
    this.ssbService.deleteCharacterById(id);
  }

  onAddCharacter(personaje: Character): void {
    this.ssbService.addCharacter(personaje);
  }
}

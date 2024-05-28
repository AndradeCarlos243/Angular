import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-ssb-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  public personajes: Character[] = [{
    name: 'Link',
    franchise: 'The Legend of Zelda',
  }, {
    name: 'Mario',
    franchise: 'Super Mario Bros',
  }, {
    name: 'Donkey Kong',
    franchise: 'Donkey Kong',
  }, {
    name: 'Samus',
    franchise: 'Metroid',
  }, {
    name: 'Yoshi',
    franchise: 'Super Mario Bros',
  }, {
    name: 'Kirby',
    franchise: 'Kirby',
  }];

  onNewCharacter(personaje: Character): void {
    this.personajes.push(personaje);
  }
}

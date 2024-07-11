
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class SsbService {
  constructor() { }
  public personajes: Character[] = [{
    id: uuid(),
    name: 'Link',
    franchise: 'The Legend of Zelda',
  }, {
    id: uuid(),
    name: 'Mario',
    franchise: 'Super Mario Bros',
  }, {
    id: uuid(),
    name: 'Donkey Kong',
    franchise: 'Donkey Kong',
  }, {
    id: uuid(),
    name: 'Samus',
    franchise: 'Metroid',
  }, {
    id: uuid(),
    name: 'Yoshi',
    franchise: 'Super Mario Bros',
  }, {
    id: uuid(),
    name: 'Kirby',
    franchise: 'Kirby',
  }];

  addCharacter(personaje: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...personaje,
    };
    this.personajes.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    const index = this.personajes.findIndex((personaje) => personaje.id === id);
    this.personajes.splice(index, 1);
  }
}

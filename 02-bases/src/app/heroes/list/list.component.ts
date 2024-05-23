import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Nasemi', 'link', 'Fox Mcloud', 'Mario', 'Luigi', 'Zelda', 'Samus', 'Donkey Kong', 'Pikachu', 'Kirby'];
  public heroeEliminado?: string;

  borrarHeroe(): void
  {
    this.heroeEliminado = this.heroes.pop();
  }
}

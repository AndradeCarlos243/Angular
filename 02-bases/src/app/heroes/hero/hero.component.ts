import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombreHeroe: string = 'nasemi';
  public edad: number = 23;

  cambiaNombre(): void {
    this.nombreHeroe == 'nasemi' ? this.nombreHeroe = 'spiderman' : this.nombreHeroe = 'nasemi';
  }

  cambiaEdad(): void {
    this.edad == 23 ? this.edad = 24 : this.edad = 23;
  }

  get capNombre(): string {
    return this.nombreHeroe.toUpperCase();
  }

  get heroDescription(): string {
    return `${this.nombreHeroe} - ${this.edad}`;
  }

  restaurarForm(): void {
    this.nombreHeroe = 'nasemi';
    this.edad = 23;
  }
}

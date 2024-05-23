import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit {
  public counter: number = 10;

  suma( value: number): void
  {
    this.counter += value;
  }

  resetear(): void
  {
    this.counter = 10;
  }

  constructor()
  {
  }

  ngOnInit() { }
}

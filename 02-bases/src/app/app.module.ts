import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/hero.module';

import { AppComponent } from './app.component';
import { SsbModule } from './ssb/ssb.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    HeroesModule,
    SsbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

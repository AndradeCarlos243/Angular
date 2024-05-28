import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormularioCombatienteComponent } from './components/formulario-combatiente/formulario-combatiente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    FormularioCombatienteComponent,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class SsbModule { }

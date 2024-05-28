import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCombatienteComponent } from './formulario-combatiente.component';

describe('FormularioCombatienteComponent', () => {
  let component: FormularioCombatienteComponent;
  let fixture: ComponentFixture<FormularioCombatienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCombatienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCombatienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

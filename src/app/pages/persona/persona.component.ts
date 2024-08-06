import { Component, input } from '@angular/core';
import { Persona } from '../../interfaces/interfaces';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  public persona = input<Persona>()
}

import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

type Grade =
  'MENSAJE' |
  'NOMBRE' |
  'RESTA' |
  'AREA' |
  'CONDICIONAL' |
  'FECHA';

interface Persona {
  nombre: string;
  edad: number;
}
@Component({
  selector: 'app-ejecicios',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './ejecicios.component.html',
  styleUrl: './ejecicios.component.css'
})
export class EjeciciosComponent {

  public grade = signal<Grade>('MENSAJE');

  persona: Persona = {
    nombre: 'Alen Ross',
    edad: 34
  }

  resta = (a: number, b: number) => {
    return a - b;
  }

  producto = (a: number, b: number) => {
    return a * b;
  }

  areaCirculo = () => {
    const radius = 5;
    return Math.PI * (Math.pow(radius, 2))
  }

  fecha = () => {
    const currentDate: Date = new Date();

    const day: string = String(currentDate.getDate()).padStart(2, '0');
  const month: string = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year: string = String(currentDate.getFullYear());

  const fechaFormateada: string = `${day}/${month}/${year}`;

    return fechaFormateada;
  }


  public isLoggedIn: boolean = true;


}

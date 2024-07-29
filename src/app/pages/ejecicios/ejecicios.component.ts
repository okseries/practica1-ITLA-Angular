import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { datosPersonas } from '../../data/personas.data';
import { DataI, Grade, Persona } from '../../interfaces/interfaces';


@Component({
  selector: 'app-ejecicios',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './ejecicios.component.html',
  styleUrl: './ejecicios.component.css'
})
export class EjeciciosComponent {

  public grade = signal<Grade>('MENSAJE');


  // cambio(){
  //   this.grade.set('FECHA')
  // }

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


  public isLoggedIn: boolean = false;

  public login(){

    this.isLoggedIn = !this.isLoggedIn;

  }

   datos: DataI[] = datosPersonas;

  

}

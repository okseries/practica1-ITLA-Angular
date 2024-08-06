import { Component, inject } from '@angular/core';
import { EjeciciosComponent } from '../../pages/ejecicios/ejecicios.component';
import { EjerciciosService } from '../../pages/ejecicios/ejercicios.service';
import { DropdownComponent, DropdownConfig } from '../../shared/components/dropdown/dropdown.component';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EjeciciosComponent, DropdownComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  public ejerciciosService = inject(EjerciciosService);
  public menuOpen: boolean = false;

  

  public menuItemsPractica1 = routes
  .map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path) 

  dropdownConfig = {
    buttonTitle: 'Opciones',
    items: [
      { path: 'nombre-edad', title: 'Nombre y Edad' },
      { path: 'resta-producto', title: 'Resta y Producto' },
      { path: 'area-circulo', title: 'Área del Círculo' },
      { path: 'condicional', title: 'Condicional' },
      { path: 'fecha', title: 'Fecha' }
    ]
  };

  public login(): void {
    this.ejerciciosService.isLoggedIn = !this.ejerciciosService.isLoggedIn
    console.log(this.menuItemsPractica1);
    
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}

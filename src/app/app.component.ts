import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { EjeciciosComponent } from './pages/ejecicios/ejecicios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EjeciciosComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'practica1-ITLA-Angular';
}

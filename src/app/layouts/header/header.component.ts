import { Component } from '@angular/core';
import { EjeciciosComponent } from '../../pages/ejecicios/ejecicios.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [EjeciciosComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}

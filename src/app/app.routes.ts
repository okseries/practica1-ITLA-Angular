import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app/angular-cuso',
    loadComponent: () => import('./pages/practica 1/mensaje/mensaje.component'),
    children: [
      {
        path: 'nombre-edad',
        title: 'Nombre y Edad',
        loadComponent: () => import('./pages/practica 1/nombre-edad/nombre-edad.component'),
      },
      {
        path: 'resta-producto',
        title: 'Resta y Producto',
        loadComponent: () => import('./pages/practica 1/resta-producto/resta-producto.component')
      },
      {
        path: 'area-circulo',
        title: 'Área del Circulo',
        loadComponent: () => import('./pages/practica 1/area-circulo/area-circulo.component')
      },
      {
        path: 'condicional',
        title: 'Condicional',
        loadComponent: () => import('./pages/practica 1/condicional/condicional.component')
      },
      {
        path: 'fecha',
        title: 'Fecha',
        loadComponent: () => import('./pages/practica 1/fecha/fecha.component')
      },
      {
        path: '', redirectTo: 'app/angular-cuso', pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/angular-cuso',
    pathMatch: 'full'
  }
];

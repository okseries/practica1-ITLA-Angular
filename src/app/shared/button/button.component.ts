import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
  <button 
   (click)="click()" class=" p-2 rounded text-center bg-blue-900 hover:bg-blue-950 text-white w-52">{{text}}</button>
  
  `,
  
})
export class ButtonComponent {

 @Input({required: true}) text!: string;
 @Input() click: () => void = () => {};


}

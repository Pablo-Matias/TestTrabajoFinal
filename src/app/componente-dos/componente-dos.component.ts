import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {

  edad:number;

  constructor() {
this.edad=45;

   }

  ngOnInit(): void {
console.log( 'esto es una alerta del componente DOS en components.ts')

  }

}

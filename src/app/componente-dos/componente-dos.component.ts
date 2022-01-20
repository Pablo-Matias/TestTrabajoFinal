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
aumentarEdad(){
  this.edad++;
  console.log(Aumentar)
}
disminuirEdad(){
  this.edad = this.edad -1;
  console.log(disminuir)
}
}


function Aumentar(Aumentar: any) {
  throw new Error('Function not implemented.');
}
function disminuir(disminuir: any) {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.css']
})
export class ComponenteTresComponent implements OnInit {
  edad:number;

  constructor() {
this.edad=17;

  }

  ngOnInit(): void {
  }

  aumentarEdad(){
    this.edad++;
    console.log(Aumentar)
  }
  disminuirEdad(){
    this.edad = this.edad -1;
    console.log(Disminuir)
  }

}

function Aumentar(Aumentar: any) {
  throw new Error('Function not implemented.');
}


function Disminuir(Disminuir: any) {
  throw new Error('Function not implemented.');
}

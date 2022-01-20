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

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '"este titulo esta en app.modules.ts"';
  nombre:string = "Pablo Matias G. (app.modules.ts :nombre, llamado desde APPcomponentes.html)";
}

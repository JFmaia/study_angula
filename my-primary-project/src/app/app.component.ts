import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Olá Mundo"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(){

  }

  //sempre quando o component inicia é executado
  ngOnInit(): void {
   setTimeout(() =>{
    console.log(1);
   },5000)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-diretivas></app-diretivas> -->
    <app-diretivas-atributos>
      <h1>Olá seus Otarios</h1>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  //Variaveis
  public valor:number = 1;
  public destruir:boolean = true;

  constructor(){

  }

  //sempre quando o component inicia é executado
  ngOnInit(): void {
    console.log("Aplicação iniciada!");
  }

  // public adicionar(): number{
  //   return this.valor +=1;
  // }

  // public destruirComponente(): void {
  //   this.destruir = !this.destruir
  // }


  // ngDoCheck(): void {
  //   console.log("DoCheck")
  // }

  // ngAfterContentInit(): void {
  //   console.log("AfterContentInit")
  // }

  // ngAfterContentChecked(): void {
  //   console.log("AfterContentChecked")
  // }

  // ngAfterViewInit(): void {
  //   console.log("AfterViewInit")
  // }

  // ngAfterViewChecked(): void {
  //   console.log("AfterViewChecked")
  // }
}

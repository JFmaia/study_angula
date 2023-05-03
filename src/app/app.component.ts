import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-diretivas></app-diretivas> -->
    <!-- <app-diretivas-atributos>
      <h1>Olá seus Otarios</h1>
      <hr>
    </app-diretivas-atributos> -->
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()">Add</button>
    <hr>
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  //Variaveis
  public addValue:number = 0;
  public valor:number = 1;
  public destruir:boolean = true;
  public getDados:{nome:string, idade:number} | undefined
  constructor(){

  }

  //sempre quando o component inicia é executado
  ngOnInit(): void {
    console.log("Aplicação iniciada!");
  }

  add():void{
    this.addValue++;
  }

  setDados(value:{nome:string, idade:number}){
    this.getDados= value;
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

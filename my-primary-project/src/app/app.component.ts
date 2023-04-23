import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <button (click)="destruirComponente()">Destruir Component</button>
    <hr>
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit,DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit,AfterViewChecked {
  //Variaveis
  public valor:number = 1;
  public destruir:boolean = true;

  constructor(){

  }

  public adicionar(): number{
    return this.valor +=1;
  }

  public destruirComponente(): void {
    this.destruir = !this.destruir
  }

  //sempre quando o component inicia é executado
  ngOnInit(): void {
   setTimeout(() =>{
    console.log(1);
   },5000)
  }

  ngDoCheck(): void {
    console.log("DoCheck")
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
}

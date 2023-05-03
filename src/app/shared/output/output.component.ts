import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter()

  public list:Array<{nome:string, idade:number}> = [
    {nome:"José", idade:22},
    {nome:"Italo", idade:24},
    {nome:"Vinicius", idade:20},
    {nome:"Tallys", idade:20},
  ]

  public getDados(index:number){
    this.enviarDados.emit(this.list[index])
  }
}

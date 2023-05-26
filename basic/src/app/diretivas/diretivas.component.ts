import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit{

  public conditionExpression:number = 10;
  public condition:boolean = true;
  public list:Array<{nome: string}> = [
    {nome:"José Flávio"},
    {nome:"Julio Marinho"},
    {nome:"Beatrix Vieira"},
    {nome:"Eloisa Maia"},
  ]
  ngOnInit(): void {
    setInterval(()=>{
      if (this.condition) {
        this.condition = false
      }else{
        this.condition = true
      }
    },2000)
  }

}

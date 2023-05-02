import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valid:boolean = true;
  public nome:string = "";
  public list:Array<{nome:string}> = [{nome:"José Flávio"}];

  ngOnInit(): void {
    setInterval(()=>{
      this.valid = !this.valid;
    },2000)
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges{
  @Input() public title:string = "Bem vindo!"

  constructor(){

  }

  ngOnInit(): void {

  }

  // Utilizado para capturar sempre que uma variavel for modificada!
  ngOnChanges(): void {
    alert("Foi alterado com sucesso");
  }

}

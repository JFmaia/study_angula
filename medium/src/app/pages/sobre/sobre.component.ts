import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass']
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){

  }

  ngOnInit():void{
    //pegar paramentros na rota
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res)
    ),
    //pega os dados da rota depois do &
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
}

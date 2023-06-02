import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass']
})
export class SobreComponent implements OnInit {
  constructor(
    // Com isto conseguimos pergar parametros nas rotas.
    private activatedRoute:ActivatedRoute,
    //Utilizar para navergar com clicks
    private router: Router
  ){}

  ngOnInit():void{
    //pegar paramentros na rota
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res)
    ),
    //pega os dados da rota depois do &
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    ),

    setInterval(()=>{
      this.router.navigate(['']);
    },5000)
  }
}

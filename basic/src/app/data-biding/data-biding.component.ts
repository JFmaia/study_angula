import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  public intro:string = "Olá pessoal, fiquem avontade para aprender!!";
  public primeiroNome: string = "José Flávio da";
  public segundoNome: string = "Silva Maia";
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg"
  constructor(){}

  ngOnInit(): void {
    console.log("Component data binding ativado!")
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public intro:string = "Olá pessoal, fiquem avontade para aprender!!";
  public primeiroNome: string = "José Flávio da";
  public segundoNome: string = "Silva Maia";
}

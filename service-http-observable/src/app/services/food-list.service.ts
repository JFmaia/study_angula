import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  //Criando um subscribe
  public emitEvent = new EventEmitter();

  //Variaveis
  private list: Array<string> = [
    "X bacon",
    "X galinha",
    "D-queles"
  ];


  constructor() { }

  public getFoodList(){
    return this.list;
  }

  public foodListAdd(value:string){
    this.foodListAlert(value);
    this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}

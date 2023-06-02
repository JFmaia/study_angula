import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
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
    this.list.push(value);
  }
}

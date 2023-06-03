import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  //List para ser usada sem api
  // private list: Array<string> = [
  //   "X bacon",
  //   "X galinha",
  //   "D-queles"
  // ];

  //Get sem api
  // public getFoodList(){
  //   return this.list;
  // }

  //Criando um subscribe
  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  //com http chamada a api
  public getFoodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(
      res => res,
      err => err
    )
  }

  // public foodListAdd(value:string){
  //   this.foodListAlert(value);
  //   this.list.push(value);
  // }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}

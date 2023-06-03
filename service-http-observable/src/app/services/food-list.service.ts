import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  //Criando um subscribe
  public emitEvent = new EventEmitter();

  //Sem Api

  // private list: Array<string> = [
  //   "X bacon",
  //   "X galinha",
  //   "D-queles"
  // ];


  // public getFoodList(){
  //   return this.list;
  // }


  // public foodListAlert(value: string){
  //   return this.emitEvent.emit(value);
  // }


  // public foodListAdd(value:string){
  //   this.foodListAlert(value);
  //   this.list.push(value);
  // }


  //Com api
  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  //com http chamada a api
  public getFoodList(): Observable <Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      err => err
    )
  }

  public foodListAdd(value:string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`,{
      name: value
    }).pipe(
      res => res,
      error => error
    )
  }

  public foodListEdit(value:string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`,{
      name: value
    }).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete( id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }

}

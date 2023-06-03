import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit{
  //Ou recebe um foodlist ou qualquer coisa tipo um erro.
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService){}

  public foodListDelete(id:number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

  public foodListEdit(name:string,id:number){
    return this.foodListService.foodListEdit(name,id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe(
      {
        next: (res) => {
          this.foodList = res;
        },
        error: (err) => {
         console.log(err)
        },
      });

    this.foodListService.emitEvent.subscribe({
      next: (res:FoodList) => {
        return this.foodList.push(res);
      },
      error: (err:any) => {
        console.log(err)
      }
    })
  }
}

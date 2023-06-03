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

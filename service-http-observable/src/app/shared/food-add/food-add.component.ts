import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit{
  constructor(private foodListService:FoodListService){}

  public listAddItem(value: string){
    this.foodListService.foodListAdd(value).subscribe({
      next: (res) => {
        this.foodListService.foodListAlert(res)
      },
      error: (err) => {
       console.log(err)
      },
    })
  }

  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit{
  public foodList: Array<string> = []

  constructor(private foodListService: FoodListService){}

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoodList();
    this.foodListService.emitEvent.subscribe({
      next:(res: any)=> console.log(res),
      err: (err: any) => console.log(err),
    });
  }
}
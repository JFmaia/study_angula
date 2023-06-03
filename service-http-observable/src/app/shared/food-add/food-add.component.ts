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
    return console.log(value);
  }

  ngOnInit(): void {

  }
}

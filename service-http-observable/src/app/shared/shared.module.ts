import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodAddComponent
  ],
  exports:[
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

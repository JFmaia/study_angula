import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRouting } from './dashboard-router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting
  ]
})
export class DashboardModule { }

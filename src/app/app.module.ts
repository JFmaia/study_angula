import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    DiretivasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

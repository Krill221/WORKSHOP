import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

import { Component } from '@angular/core';
import { IFood } from 'src/app/services/food.interface';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private foodService: FoodService) {}

  foods: IFood[] = []

  ngOnInit(){
    this.foodService.getAll().subscribe(data => {
      this.foods = data
    })
  }

}

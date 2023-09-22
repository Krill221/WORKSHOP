import { Component, Input } from '@angular/core';
import { IFood } from 'src/app/services/food.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() food: IFood | undefined
}

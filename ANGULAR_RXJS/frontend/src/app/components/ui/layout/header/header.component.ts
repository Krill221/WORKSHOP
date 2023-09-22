import { Component } from '@angular/core';
import { MenuItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {path: '/', icon: 'home'},
    {path: '/favorites', icon: 'favorites'},
    {path: '/profile', icon: 'person'},
  ]
}

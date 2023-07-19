import { Injectable } from '@nestjs/common';
import { IMenuRepository } from 'src/application/interfaces/IMenuRepository';

@Injectable()
export class MenuRepository implements IMenuRepository {

  private menu = new Array()

  createMenu(menu: any): void {
    console.log('menu added to repo', menu)
    this.menu.push(menu)
  }
}
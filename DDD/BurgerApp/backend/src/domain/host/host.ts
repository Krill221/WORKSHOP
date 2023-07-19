import { randomUUID } from 'crypto';
import { DinnerId } from '../dinner/valueObjects/DinnerId';
import { MenuId } from '../menu/valueObjects/MenuId';
import { UserId } from '../user/valueObjects/UserId';
import { AggregateRoot } from '@nestjs/cqrs';

export class Host extends AggregateRoot {
  public uuid: string;
  public userId: UserId;

  constructor(userId: UserId){
    super();
    this.uuid = randomUUID();
    this.userId = userId
  }

  addDinner(dinnerId: DinnerId): void {}
  removeDinner(dinnerId: DinnerId): void {}

  addMenu(menuId: MenuId): void {}
  removeMenu(menuId: MenuId): void {}
}
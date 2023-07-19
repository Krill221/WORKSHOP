import { randomUUID } from 'crypto';
import { DinnerId } from '../dinner/valueObjects/DinnerId';
import { MenuReviewId } from '../menuReview/valueObjects/MenuReviewId';
import { AggregateRoot } from '@nestjs/cqrs';
import { MenuCreatedEvent } from './events/menuCreated';

export class Menu extends AggregateRoot {
  public uuid: string;
  public name: string;
  public desc: string;


  constructor(name: string, desc: string) {
    super();
    this.uuid = randomUUID()
    this.name = name
    this.desc = desc

    const event = new MenuCreatedEvent(this)
    console.log(event)
    this.apply(event)
  }

  addDinner(dinnerId: DinnerId): void {} 
  removeDinner(dinnerId: DinnerId): void {}

  addMenuReview(menuReviewId: MenuReviewId): void {}
  removeMenuReview(menuReviewId: MenuReviewId): void {}

}
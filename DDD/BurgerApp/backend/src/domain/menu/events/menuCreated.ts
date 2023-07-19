import { IEvent } from '@nestjs/cqrs';
import { Menu } from '../menu';


export class MenuCreatedEvent implements IEvent {
  constructor(public menu: Menu) { }
}
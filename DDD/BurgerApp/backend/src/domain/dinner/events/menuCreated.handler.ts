import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { MenuCreatedEvent } from "src/domain/menu/events/menuCreated";


@EventsHandler(MenuCreatedEvent)
export class MenuCreatedEventHandler implements IEventHandler<MenuCreatedEvent> {
  constructor() {}

  handle(event: MenuCreatedEvent) {
    console.log("Handle MenuCreatedEvent in dinner")
  }
}
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { DeviceCreatedEventBase } from "../_constant/device-created.event";
import { DeviceEventProducer } from "./5-event.producer";

@EventsHandler(DeviceCreatedEventBase)
export class DeviceCreatedHandler implements IEventHandler<DeviceCreatedEventBase> {
  constructor(private readonly eventProducer: DeviceEventProducer) { }

  handle(event: DeviceCreatedEventBase) {
    console.log("run: handle DeviceCreatedHandler")
    console.log("---", event)
    const { constructor }: DeviceCreatedEventBase = Object.getPrototypeOf(event);

    // SEND TO KAFKA
    this.eventProducer.produce(constructor.name, event);
  }
}
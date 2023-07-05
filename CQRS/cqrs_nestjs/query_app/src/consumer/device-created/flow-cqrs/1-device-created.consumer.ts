import { Controller, Inject } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';

import { DeviceCreatedEvent } from '../_constants/device-created.event';

@Controller()
export class DeviceCreatedConsumer {

  @Inject(EventBus)
  private readonly eventBus: EventBus;

  @MessagePattern('DeviceCreatedEventBase')
  private consume(deviceDto): void {
    console.log("Income event")
    console.log(deviceDto)
    const event = plainToClass(DeviceCreatedEvent, deviceDto);

    console.log(event)

    this.eventBus.publish(event);
  }
}

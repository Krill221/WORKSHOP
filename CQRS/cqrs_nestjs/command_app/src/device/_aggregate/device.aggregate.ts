import { DeviceCreatedEventBase } from '../_constant/device-created.event';
import { DeviceDto } from '../_constant/device.dto';
//import { ExtendedAggregateRoot } from 'nestjs-event-sourcing';
import {AggregateRoot} from '@nestjs/cqrs';
import { plainToClass } from 'class-transformer';


export class DeviceAggregateRoot extends AggregateRoot {
  data: DeviceDto;

  constructor(data: DeviceDto){
    super()
    this.data = data;
    // send event on Creation
    const event = plainToClass(DeviceCreatedEventBase, this.data);

    this.apply(event);
  }
}
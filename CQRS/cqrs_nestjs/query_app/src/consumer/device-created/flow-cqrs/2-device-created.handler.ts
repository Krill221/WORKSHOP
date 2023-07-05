import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { DeviceCreatedEvent } from '../_constants/device-created.event';
import { Device } from 'src/typeorm/device.entity';
import { Repository } from 'typeorm';

@EventsHandler(DeviceCreatedEvent)
export class DeviceCreatedHandler implements IEventHandler<DeviceCreatedEvent> {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) { }

  public handle(event: DeviceCreatedEvent): Promise<Device> {
    const device = new Device();

    device.id = event.id;
    device.deviceType = event.deviceType;
    device.createdDate = event.createdDate;

    return this.deviceRepository.save(device);
  }
}

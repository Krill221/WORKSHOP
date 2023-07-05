import { IEvent } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';
import { CreateDeviceDto } from './create-device.dto';

export class DeviceCreatedEvent implements IEvent {
  public id: string;
  public deviceType: string;
  public createdDate: Date;

  constructor() {
    this.id = uuidv4();
    this.createdDate = new Date();
  }
}

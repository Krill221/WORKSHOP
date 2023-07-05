import { FindDeviceDto } from './find-device.dto';

export class FindDeviceQuery {
  public id: string;

  constructor(payload: FindDeviceDto) {
    this.id = payload.id;
  }
}

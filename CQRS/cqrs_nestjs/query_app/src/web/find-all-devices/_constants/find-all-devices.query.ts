import { FindAllDevicesDto } from './find-all-devices.dto';

export class FindAllDevicesQuery {
  public page: number;

  constructor(query: FindAllDevicesDto) {
    this.page = query.page;
  }
}

import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FindAllDevicesDto } from '../_constants/find-all-devices.dto';
import { FindAllDevicesQuery } from '../_constants/find-all-devices.query';

@Controller()
export class FindAllDevicesController {
  constructor(private readonly queryBus: QueryBus) { }
  

  @Post('FindAllDevices')
  async findAllDevices(@Body() payload: FindAllDevicesDto): Promise<any> {
    const query = new FindAllDevicesQuery(payload);
    const data = await this.queryBus.execute(query);

    return { data, status: HttpStatus.OK, error: null };
  }
}

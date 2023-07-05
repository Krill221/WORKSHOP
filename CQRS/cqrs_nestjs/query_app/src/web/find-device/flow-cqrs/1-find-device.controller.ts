import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { FindDeviceDto } from '../_constants/find-device.dto';
import { FindDeviceQuery } from '../_constants/find-device.query';

@Controller()
export class FindDeviceController {
  constructor(private readonly queryBus: QueryBus) { }

  @Post('/findDevice')
  async findDevice(@Body() findDeviceDto: FindDeviceDto): Promise<any> {
    console.log("findDevice", findDeviceDto)


    const query = new FindDeviceQuery(findDeviceDto);
    const data = await this.queryBus.execute(query);


    console.log(data)


    // if (!data) {
    //   throw new HttpException('No device found!', HttpStatus.NO_CONTENT);
    // }

    // return { data, status: HttpStatus.OK, error: null };
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { DeviceDto } from '../_constant/device.dto';
import { DevicesService } from './2-devices.service';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Post()
  async connectDevice(@Body() deviceDto: DeviceDto): Promise<DeviceDto> {
    console.log("run: connectDevice Controller")
    const deviceId = 123
    return this.devicesService.createDevice({ ...{ deviceId }, ...deviceDto });
  }
}
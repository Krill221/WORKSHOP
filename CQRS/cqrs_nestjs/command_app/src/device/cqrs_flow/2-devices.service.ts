import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateDeviceCommand } from '../_constant/create-device.command';
import { DeviceDto } from '../_constant/device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly commandBus: CommandBus) { }

  async createDevice(device: DeviceDto) {
    console.log("run: createDevice DevicesService")
    return await this.commandBus.execute( new CreateDeviceCommand(device) );
  }

}
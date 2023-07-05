import { ICommand } from '@nestjs/cqrs';
import { DeviceDto } from './device.dto';

export class CreateDeviceCommand implements ICommand {
  constructor(
    public readonly deviceDto: DeviceDto,
  ) {}
}
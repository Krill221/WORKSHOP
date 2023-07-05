import { QueryHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { FindDeviceQuery } from '../_constants/find-device.query';
import { Device } from 'src/typeorm/device.entity';
import { Repository } from 'typeorm';

@QueryHandler(FindDeviceQuery)
export class FindDeviceQueryHandler implements ICommandHandler<FindDeviceQuery> {

  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) { }

  public execute(query: FindDeviceQuery): Promise<any> {
    console.log("QueryHandler", query)

    return this.deviceRepository.find();
  }
}

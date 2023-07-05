import { QueryHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllDevicesQuery } from '../_constants/find-all-devices.query';
import { Device } from 'src/typeorm/device.entity';
import { Repository } from 'typeorm';

@QueryHandler(FindAllDevicesQuery)
export class FindAllDevicesQueryHandler implements ICommandHandler<FindAllDevicesQuery> {

  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) { }

  public async execute(query: FindAllDevicesQuery): Promise<any> {
    const take: number = 15;
    const total: number = await this.deviceRepository.count();
    const pageLength: number = Math.ceil(total / take) || 1;
    const page: number = query.page > pageLength ? 1 : query.page;
    const skip: number = page > 1 ? take * (page - 1) : 0;
    const devices = await this.deviceRepository.find({ skip, take, select: ['id', 'deviceType'] });

    return { devices, page, total, count: devices.length };
  }
}

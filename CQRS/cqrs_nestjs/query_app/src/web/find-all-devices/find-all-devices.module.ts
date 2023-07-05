import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FindAllDevicesController } from './flow-cqrs/1-find-all-devices.controller';
import { FindAllDevicesQueryHandler } from './flow-cqrs/2-find-all-devices.handler';
import { Device } from 'src/typeorm/device.entity';

@Module({
  imports: [
    CqrsModule, 
    TypeOrmModule.forFeature([Device] )
  ],
  controllers: [FindAllDevicesController],
  providers: [FindAllDevicesQueryHandler],
})
export class FindAllDevicesModule {}

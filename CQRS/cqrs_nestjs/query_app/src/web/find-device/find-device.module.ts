import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { FindDeviceController } from './flow-cqrs/1-find-device.controller';
import { FindDeviceQueryHandler } from './flow-cqrs/2-find-device.handler';
import { Device } from 'src/typeorm/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Device] )
  ],
  controllers: [FindDeviceController],
  providers: [FindDeviceQueryHandler],
})
export class FindDeviceModule {}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeviceCreatedConsumer } from './flow-cqrs/1-device-created.consumer';
import { DeviceCreatedHandler } from './flow-cqrs/2-device-created.handler';
import { Device } from 'src/typeorm/device.entity';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([{ name: 'KAFKA_SERVICE', transport: Transport.KAFKA }]),
    TypeOrmModule.forFeature([Device] )
  ],
  controllers: [DeviceCreatedConsumer],
  providers: [DeviceCreatedHandler],
})
export class DeviceCreatedModule {}

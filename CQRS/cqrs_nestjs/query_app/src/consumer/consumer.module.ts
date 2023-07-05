import { Module } from '@nestjs/common';
import { DeviceCreatedModule } from './device-created/device-created.module';

@Module({
  imports: [DeviceCreatedModule]
})
export class ConsumerModule {}

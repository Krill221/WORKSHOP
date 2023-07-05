import { Module } from '@nestjs/common';
import { DevicesModule } from './device/device.module';

@Module({
  imports: [DevicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

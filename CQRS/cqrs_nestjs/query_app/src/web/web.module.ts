import { Module } from '@nestjs/common';

import { FindDeviceModule } from './find-device/find-device.module';
import { FindAllDevicesModule } from './find-all-devices/find-all-devices.module';

@Module({
  imports: [FindAllDevicesModule, FindDeviceModule],
})
export class WebModule {}

import { IsString } from 'class-validator';
// import { Geolocation } from './geolocation.dto';
// import { DeviceInfo } from './device-info.dto';

export class DeviceDto {

  @IsString()
  readonly deviceId!: string;

  @IsString()
  readonly deviceTypeId!: string;

}
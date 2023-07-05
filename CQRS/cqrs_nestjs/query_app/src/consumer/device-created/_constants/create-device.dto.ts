import { IsString } from 'class-validator';


export class CreateDeviceDto {

  @IsString()
  readonly id!: string;

  @IsString()
  readonly deviceId!: string;

  @IsString()
  readonly deviceType!: string;
}

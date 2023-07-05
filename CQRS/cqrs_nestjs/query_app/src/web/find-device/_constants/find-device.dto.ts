import { IsUUID } from 'class-validator';

export class FindDeviceDto {
  @IsUUID()
  public id: string;
}

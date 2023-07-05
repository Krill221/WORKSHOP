import { IsInt, IsOptional, Min } from 'class-validator';

export class FindAllDevicesDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  public page: number = 1;
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate(data: number[]): number {
    return (data || []).reduce( (a, v) => a + Number(v), 0)
  }
}
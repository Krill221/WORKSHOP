import { Controller, Post, Body, Logger, UploadedFile } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController')

  constructor(private readonly mathService: MathService) {
  }

  @Post('/add')
  async accumulate(@Body('data') data: number[]){
    this.logger.log('data to send: ' + data.toString() )

    return this.mathService.accumulate(data);
  }
}

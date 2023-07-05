import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger: Logger
  constructor(private readonly appService: AppService){
    this.logger = new Logger('AppController');
  }

  @MessagePattern({ cmd: 'add' })
  accumulate(data: number[]): number {
    this.logger.log('Data: ', data);
    
    return this.appService.accumulate(data);
  }
  
}
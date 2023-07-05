import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod  } from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number; 
}


@Controller()
export class AppController {
  private logger: Logger
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('AppController');
  }

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log('Data: ', numberArray.data);

    return { sum: this.appService.accumulate(numberArray.data) }
  }

}
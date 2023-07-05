import { Controller, Post, Body, Logger } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices'
import { IGrpcService } from './grpc.interface';
import { OnModuleInit } from '@nestjs/common/interfaces';
import { join } from 'path';


@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController')
 
  @Client(    {
    transport: Transport.GRPC,
    options: {
      package: 'app',
      protoPath: join(__dirname, '../../src/app.proto')
    }
  },)
  private client: ClientGrpc;

  private grpcService: IGrpcService

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('/add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('data to send: ' + data.toString())

    return this.grpcService.accumulate({ data });
  }
}



import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Injectable()
export class MathService {

  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877
      }
    })
  }
  accumulate(payload: number[]): Observable<number> {
    const pattern = { cmd: 'add' };
    return this.client.send<number, number[]>(pattern, payload)
  }
}

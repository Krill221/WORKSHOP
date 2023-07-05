import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Injectable()
export class MathService {

  private client: ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    })
  }
  async accumulate(payload: number[]) {
    const pattern = { cmd: 'add' };
    const res = await this.client.send<number, number[]>(pattern, payload).toPromise();
    return res
  }
}

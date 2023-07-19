import { AggregateRoot } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';

export class User extends AggregateRoot {
  public uuid: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(name: string, email: string, password: string){
    super();
    this.uuid = randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }

}

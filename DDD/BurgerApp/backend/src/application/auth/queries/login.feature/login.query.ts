
import { IQuery } from '@nestjs/cqrs';

export class LoginQuery implements IQuery {
  constructor(
    public email: string,
    public password: string,
  ) {}
}
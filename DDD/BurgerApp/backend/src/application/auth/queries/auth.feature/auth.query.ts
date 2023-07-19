
import { IQuery } from '@nestjs/cqrs';

export class AuthQuery implements IQuery {
  constructor(
    public uuid: string,
  ) {}
}
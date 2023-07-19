
import { ICommand } from '@nestjs/cqrs';


export class RegisterCommand implements ICommand {
  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}
}
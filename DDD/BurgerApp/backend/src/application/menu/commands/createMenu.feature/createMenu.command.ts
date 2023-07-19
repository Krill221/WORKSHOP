
import { ICommand } from '@nestjs/cqrs';


export class CreateMenuCommand implements ICommand {
  constructor(
    public name: string,
    public desc: string,
  ) {}
}
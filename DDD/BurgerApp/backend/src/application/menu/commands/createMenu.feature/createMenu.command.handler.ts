import { ICommandHandler, CommandHandler, EventPublisher, EventBus } from '@nestjs/cqrs';
import { CreateMenuCommand } from './createMenu.command';
import { Inject } from '@nestjs/common';
import { CreateMenuResultDto } from '../../dto/createMenuResult.dto';
import { Menu } from 'src/domain/menu/menu';
import { IMenuRepository } from 'src/application/interfaces/IMenuRepository';

@CommandHandler(CreateMenuCommand)
export class CreateMenuCommandHandler implements ICommandHandler<CreateMenuCommand> {

  constructor(
    @Inject(IMenuRepository)
    private readonly menuRepository: IMenuRepository,
    private readonly publisher: EventPublisher,
  ) { }

  async execute(command: CreateMenuCommand) {
    console.log("run: command handler CreateMenuCommand")

    // Create user from Domain
    const menu = new Menu(command.name, command.desc)

    // Add menu to repo
    this.menuRepository.createMenu(menu)

    // publish events
    const menuContext = this.publisher.mergeObjectContext(menu)
    menuContext.commit()

    let res = new CreateMenuResultDto(
      menu.uuid,
      menu.name,
      menu.desc,
    )
    return res

  }
}
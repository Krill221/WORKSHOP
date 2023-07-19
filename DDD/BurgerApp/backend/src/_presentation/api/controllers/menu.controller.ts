import { Body, Controller, Post } from '@nestjs/common';
import { CreateMenuRequestDto } from '../dto/menus/createMenuRequest.dto';
import { CreateMenuResponseDto } from '../dto/menus/createMenuResponse.dto';
import { CreateMenuCommand } from 'src/application/menu/commands/createMenu.feature/createMenu.command';
import { CommandBus } from '@nestjs/cqrs';

//@UseGuards(AuthGuard)
@Controller('hosts/:hostId/menus')
export class MenuController {

  constructor(
    private readonly commandBus: CommandBus
  ) { }

  @Post('createMenu')
  async createMenu(@Body() dto: CreateMenuRequestDto): Promise<CreateMenuResponseDto> {

    const command = new CreateMenuCommand(dto.name, dto.desc)


    let ans = await this.commandBus.execute(command);

    const resp = new CreateMenuResponseDto()
    resp.uuid = ans.uuid
    resp.name = ans.name
    resp.desc = ans.desc

    return resp
  }
}

import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { MenuRepository } from 'src/infrastructure/persistance/menu.repository';
import { IMenuRepository } from '../interfaces/IMenuRepository';
import { CreateMenuCommandHandler } from './commands/createMenu.feature/createMenu.command.handler';

@Module({
  imports: [
    InfrastructureModule
  ],
  providers: [
    { provide: IMenuRepository, useClass: MenuRepository },
    CreateMenuCommandHandler,
  ],
  exports: []
})
export class MenuModule {}

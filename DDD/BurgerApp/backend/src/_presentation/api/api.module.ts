import { Module } from '@nestjs/common';
import { ApiController } from './controllers/auth.controller';
import { CqrsModule } from "@nestjs/cqrs";
import { MenuController } from './controllers/menu.controller';

@Module({
  imports: [CqrsModule],
  controllers: [ApiController, MenuController],
})
export class ApiModule {}

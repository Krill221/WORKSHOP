import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MenuCreatedEventHandler } from './dinner/events/menuCreated.handler';

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    MenuCreatedEventHandler,
  ],
  exports: []
})
export class DomainModule {}

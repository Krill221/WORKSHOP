import { Module } from '@nestjs/common';
import { ApiModule } from './_presentation/api/api.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';

@Module({ 
  imports: [
    ApiModule, 
    ApplicationModule, 
    InfrastructureModule,
    DomainModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

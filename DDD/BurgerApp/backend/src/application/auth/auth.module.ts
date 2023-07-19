import { Module } from '@nestjs/common';
import { JwtTokenService } from 'src/infrastructure/services/jwtToken.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { UserRepository } from 'src/infrastructure/persistance/user.repository';
import { IJwtTokenService } from '../interfaces/IJwtTokenService';
import { IUserRepository } from '../interfaces/IUserRepository';
import { RegisterCommandHandler } from './commands/register.feature/register.command.handler';
import { LoginQueryHandler } from './queries/login.feature/login.query.handler';
import { AuthQueryHandler } from './queries/auth.feature/auth.query.handler';

@Module({
  imports: [
    InfrastructureModule
  ],
  providers: [
    { provide: IJwtTokenService, useClass: JwtTokenService },
    { provide: IUserRepository, useClass: UserRepository },
    RegisterCommandHandler,
    LoginQueryHandler,
    AuthQueryHandler
  ],
  exports: []
})
export class AuthModule {}

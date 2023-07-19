import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenService } from './services/jwtToken.service';
import { UserRepository } from './persistance/user.repository';
import { MenuRepository } from './persistance/menu.repository';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '120s' },
    })],
  providers: [
    JwtTokenService,
    UserRepository,
    MenuRepository
  ],
  exports: [JwtTokenService, JwtModule, UserRepository, MenuRepository]
})
export class InfrastructureModule { }
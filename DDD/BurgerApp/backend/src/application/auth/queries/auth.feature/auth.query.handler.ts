import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AuthQuery } from './auth.query';
import { IJwtTokenService } from 'src/application/interfaces/IJwtTokenService';
import { IUserRepository } from 'src/application/interfaces/IUserRepository';
import { Inject } from '@nestjs/common';
import { AuthResultDto } from '../../dto/authResult.dto';

@QueryHandler(AuthQuery)
export class AuthQueryHandler implements IQueryHandler<AuthQuery> {

  constructor(
    @Inject(IJwtTokenService)
    private readonly jwtTokenService: IJwtTokenService,
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) { }

  async execute(query: AuthQuery) {
    console.log("run: query handler AuthQuery")

    const user = this.userRepository.findUnique(query.uuid)
    
    let res = new AuthResultDto(
      user.uuid,
      user.name,
      user.email,
      null
    )
    return res


  }
}
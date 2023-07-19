import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LoginQuery } from './login.query';
import { IJwtTokenService } from 'src/application/interfaces/IJwtTokenService';
import { IUserRepository } from 'src/application/interfaces/IUserRepository';
import { Inject } from '@nestjs/common';
import { AuthResultDto } from '../../dto/authResult.dto';

@QueryHandler(LoginQuery)
export class LoginQueryHandler implements IQueryHandler<LoginQuery> {

  constructor(
    @Inject(IJwtTokenService)
    private readonly jwtTokenService: IJwtTokenService,
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) { }

  async execute(query: LoginQuery) {
    console.log("run: query handler LoginQuery")

    const user = this.userRepository.getUserByEmail(query.email)

    // Validate
    if( user === null)  throw new Error('User does not exists!')
    if( user.password !== query.password)  throw new Error('User password not valid!')

    const token = this.jwtTokenService.generateToken(user.uuid, user.name)

    let res = new AuthResultDto(
      user.uuid,
      user.name,
      user.email,
      token
    )
    return res


  }
}
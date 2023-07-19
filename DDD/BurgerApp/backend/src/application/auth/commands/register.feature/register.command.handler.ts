import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from './register.command';

import { IJwtTokenService } from 'src/application/interfaces/IJwtTokenService';
import { IUserRepository } from 'src/application/interfaces/IUserRepository';

import { Inject } from '@nestjs/common';
import { User } from 'src/domain/user/user';
import { AuthResultDto } from '../../dto/authResult.dto';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler implements ICommandHandler<RegisterCommand> {

  constructor(
    @Inject(IJwtTokenService)
    private readonly jwtTokenService: IJwtTokenService,
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) { }

  async execute(command: RegisterCommand) {
    console.log("run: command handler RegisterCommand")
    console.log(command.name, command.email, command.password)

    // Check if exists
    if (this.userRepository.getUserByEmail(command.email) !== null) {
      throw new Error('User with given email already exists!')
    }

    // Create user from Domain
    const user = new User(command.name, command.email, command.password)
    
     // Add user to repo
    this.userRepository.addUser(user)

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
import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthRespDto } from 'src/_presentation/api/dto/auth/authResp.dto';
import { RegisterCommand } from 'src/application/auth/commands/register.feature/register.command';
import { LoginQuery } from 'src/application/auth/queries/login.feature/login.query';
import { RegisterDto } from '../dto/auth/register.dto';
import { LoginDto } from '../dto/auth/login.dto';

@Controller('auth')
export class ApiController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
    ) { }


  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<AuthRespDto> {

    const command = new RegisterCommand(dto.name, dto.email, dto.password)

    let res = await this.commandBus.execute( command );

    let resp = new AuthRespDto(
      res.uuid,
      res.name,
      res.email,
      res.token
    );

    return resp
  }

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<AuthRespDto> {

    const query = new LoginQuery(dto.email, dto.password)

    let res = await this.queryBus.execute( query )

    let resp = new AuthRespDto(
      res.uuid,
      res.name,
      res.email,
      res.token
    );

    return resp
  }

} 

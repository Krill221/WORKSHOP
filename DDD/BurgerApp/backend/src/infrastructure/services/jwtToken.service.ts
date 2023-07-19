import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { IJwtTokenService } from 'src/application/interfaces/IJwtTokenService';

@Injectable()
export class JwtTokenService implements IJwtTokenService {
  constructor(private readonly jwt: JwtService){}

  generateToken(uuid: string, name: string): string {

    const payload = {
      uuid: uuid,
      name: name
    }
    const token = this.jwt.sign(payload)
    return token
  }
}

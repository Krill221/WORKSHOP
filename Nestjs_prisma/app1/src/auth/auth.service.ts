import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) { }

    async signin(dto: AuthDto) {
        try {
            const hash = await argon.hash(dto.password)
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash: hash
                }
            });
            return this.signToken(user.id, user.email)
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError
            ) {
                if (e.code === 'P2002') {
                    throw new ForbiddenException(
                        'Credentials taken'
                    );
                }
            }
            throw e;
        }
    }

    async signup(dto: AuthDto) {
        // find user
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            }
        });
        // throw err if not exists
        if (!user) throw new ForbiddenException(
            'Credentials incorrect'
        );

        // compare pass
        const same = await argon.verify(user.hash, dto.password)
        // if wrong throw err
        if (!same) throw new ForbiddenException(
            'Credentials incorrect'
        );

        return this.signToken(user.id, user.email)
    }

    async signToken(
        userId: number,
        email: string
    ): Promise<{access_token:string}> {
        const payload = {
            sub: userId,
            email: email
        }
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '50m',
            secret: secret
        })
        return {
            access_token: token
        }

    }
}
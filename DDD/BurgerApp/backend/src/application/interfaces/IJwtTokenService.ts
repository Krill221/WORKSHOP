

export interface IJwtTokenService {
    generateToken(uuid: string, name: string): string
}

export const IJwtTokenService = Symbol('IJwtTokenService');
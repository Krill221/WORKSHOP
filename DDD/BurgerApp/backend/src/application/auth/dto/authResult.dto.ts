
export class AuthResultDto {
  constructor(
    public uuid: string,
    public name: string,
    public email: string,
    public token: string,
  ) {}
}
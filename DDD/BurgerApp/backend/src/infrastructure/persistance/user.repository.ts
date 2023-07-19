import { Injectable } from '@nestjs/common';
  import { IUserRepository } from 'src/application/interfaces/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {

  private users = new Array()

  getUserByEmail(email: string): any {
    const user = this.users.find( user => user.email === email )
    return user !== undefined ? user : null
  }

  addUser(user: any): void {
    this.users.push( user)
  }

  findUnique(uuid: string): any {
    const user = this.users.find( user => user.uuid === uuid )
    return user !== undefined ? user : null
  }
}

import { User } from "src/domain/user/user";

export interface IUserRepository {
    getUserByEmail(email: string): User

    addUser(user: User): void;

    findUnique(uuid: string): User;
}

export const IUserRepository = Symbol('IUserRepository');
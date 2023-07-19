import { Menu } from "src/domain/menu/menu";

export interface IMenuRepository {

    createMenu(menu: Menu): void;
}

export const IMenuRepository = Symbol('IMenuRepository');
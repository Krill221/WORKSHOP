import "reflect-metadata";
import { Container } from "inversify";
import { ICardService } from "./card.interface";
import { TYPES } from "./types";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";


const myContainer = new Container();
myContainer.bind<ICardService>(TYPES.ICardService).to(CardService)
myContainer.bind<CardController>(TYPES.CardController).to(CardController)
export { myContainer };
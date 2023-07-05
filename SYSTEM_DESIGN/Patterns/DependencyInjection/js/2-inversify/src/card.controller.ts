import { ICardService } from "./card.interface";
import { CardDto } from "./card.dto";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";


@injectable()
export class CardController {
  constructor( @inject(TYPES.ICardService) private cardService: ICardService) { }

  get(dto: CardDto) {
    this.cardService.print(dto)
  }
}
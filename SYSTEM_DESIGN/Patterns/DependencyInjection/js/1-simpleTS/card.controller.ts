import { ICardServiceInterface } from "./card.interface";
import { CardDto } from "./card.dto";


export class CardController {
  constructor(private readonly cardService: ICardServiceInterface){  }
  get(dto: CardDto){
    this.cardService.print(dto)
  }
}
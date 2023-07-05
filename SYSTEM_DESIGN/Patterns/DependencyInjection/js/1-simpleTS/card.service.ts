import { ICardServiceInterface } from "./card.interface"
import { CardDto } from "./card.dto";

// injectable
export class CardService implements ICardServiceInterface {
  print(dto: CardDto){ console.log(dto.text) }
}


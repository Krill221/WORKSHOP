import { ICardServiceInterface } from "./card.interface"
import { CardDto } from "./card.dto";

// injectable
export class CardService2 implements ICardServiceInterface {
  print(dto: CardDto){ console.table(dto) }
}


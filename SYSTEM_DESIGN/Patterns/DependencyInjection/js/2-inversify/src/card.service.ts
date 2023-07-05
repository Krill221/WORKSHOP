import { ICardService } from "./card.interface"
import { CardDto } from "./card.dto";
import { injectable } from "inversify";

@injectable()
export class CardService implements ICardService{
  print(dto: CardDto){ console.log(dto.text) }
}
import { CardController } from "./card.controller"
import { CardService } from "./card.service"
import { CardService2 } from "./card2.service"

// server
//const controller = new CardController( new CardService() )
const controller = new CardController( new CardService2() )
controller.get({text: "hello"})

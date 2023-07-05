
// controller
class CardController {
  constructor(cardService){ this.cardService = cardService }
  get(dto){
    this.cardService.print(dto)
  }
}

// injectable
class CardService {
  print(dto){ console.log(dto.text) }
}
// injectable 2
class CardService2 {
  print(dto){ console.table(dto) }
}

// server
controller = new CardController(new CardService2())
controller.get({text: "hello"})



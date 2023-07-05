import { CardController } from "./card.controller"
import { TYPES } from "./types";
import { myContainer } from "./inversify.config"

// server

// Composition root
const controller = myContainer.get<CardController>(TYPES.CardController);
controller.get({ text: "hello" })

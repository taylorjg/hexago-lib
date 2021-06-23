import { Card } from './card'
import { Colour, HexagoNumber } from './enums'
import { CardThings, Thing } from './thing'

const card1Things: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1)
]

const card2Things: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Red, HexagoNumber.Number1)
]

const card1 = new Card(card1Things)
const card2 = new Card(card2Things)

export class Deck {

  private static readonly originalCards: readonly Card[] = [
    card1,
    card2
  ]
}

import { Card } from './card'
import { Colour, HexagoNumber } from './enums'
import { CardWedges, Wedge } from './wedge'

const card1Wedges: CardWedges = [
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1)
]

const card2Wedges: CardWedges = [
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Red, HexagoNumber.Number1)
]

const card1 = new Card(card1Wedges)
const card2 = new Card(card2Wedges)

export class Deck {

  private static readonly originalCards: readonly Card[] = [
    card1,
    card2
  ]
}

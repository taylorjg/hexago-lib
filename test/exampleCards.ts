import { Card } from '../src/card'
import { Colour, HexagoNumber, Rotation } from '../src/enums'
import { CardWedges, Wedge } from '../src/wedge'
import { PlacedCard } from '../src/placedCard'

export const cardWedgesA: CardWedges = [
  new Wedge(Colour.Green, HexagoNumber.Number5),
  new Wedge(Colour.Yellow, HexagoNumber.Number6),
  new Wedge(Colour.Green, HexagoNumber.Number3),
  new Wedge(Colour.Red, HexagoNumber.Number2),
  new Wedge(Colour.Orange, HexagoNumber.Number1),
  new Wedge(Colour.Blue, HexagoNumber.Number2)
]

export const cardA = new Card(cardWedgesA)
export const placedCardA = new PlacedCard(cardA, 0, 0, Rotation.Rotation0)

export const cardWedgesB: CardWedges = [
  new Wedge(Colour.Green, HexagoNumber.Number1),
  new Wedge(Colour.Yellow, HexagoNumber.Number4),
  new Wedge(Colour.Red, HexagoNumber.Number3),
  new Wedge(Colour.Blue, HexagoNumber.Number5),
  new Wedge(Colour.Red, HexagoNumber.Number6),
  new Wedge(Colour.Orange, HexagoNumber.Number3)
]

export const cardB = new Card(cardWedgesB)
export const placedCardB = new PlacedCard(cardB, 0, 2, Rotation.Rotation0)

export const cardWedgesC: CardWedges = [
  new Wedge(Colour.Blue, HexagoNumber.Number6),
  new Wedge(Colour.Orange, HexagoNumber.Number2),
  new Wedge(Colour.Green, HexagoNumber.Number5),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Yellow, HexagoNumber.Number5),
  new Wedge(Colour.Red, HexagoNumber.Number3)
]

export const cardC = new Card(cardWedgesC)
export const placedCardC = new PlacedCard(cardC, 1, 1, Rotation.Rotation0)

export const cardWedgesD: CardWedges = [
  new Wedge(Colour.Red, HexagoNumber.Number4),
  new Wedge(Colour.Yellow, HexagoNumber.Number5),
  new Wedge(Colour.Blue, HexagoNumber.Number6),
  new Wedge(Colour.Purple, HexagoNumber.Number4),
  new Wedge(Colour.Green, HexagoNumber.Number2),
  new Wedge(Colour.Purple, HexagoNumber.Number1)
]

export const cardD = new Card(cardWedgesD)
export const placedCardD = new PlacedCard(cardD, 1, -1, Rotation.Rotation0)

export const cardWedgesE: CardWedges = [
  new Wedge(Colour.Purple, HexagoNumber.Number4),
  new Wedge(Colour.Blue, HexagoNumber.Number5),
  new Wedge(Colour.Yellow, HexagoNumber.Number6),
  new Wedge(Colour.Green, HexagoNumber.Number4),
  new Wedge(Colour.Purple, HexagoNumber.Number3),
  new Wedge(Colour.Orange, HexagoNumber.Number1)
]

export const cardE = new Card(cardWedgesE)
export const placedCardE = new PlacedCard(cardE, 2, -2, Rotation.Rotation0)

export const cardWedgesF: CardWedges = [
  new Wedge(Colour.Red, HexagoNumber.Number6),
  new Wedge(Colour.Blue, HexagoNumber.Number5),
  new Wedge(Colour.Purple, HexagoNumber.Number2),
  new Wedge(Colour.Green, HexagoNumber.Number1),
  new Wedge(Colour.Yellow, HexagoNumber.Number5),
  new Wedge(Colour.Blue, HexagoNumber.Number4)
]

export const cardF = new Card(cardWedgesF)
export const placedCardF = new PlacedCard(cardF, 2, 0, Rotation.Rotation0)

export const cardWedgesG: CardWedges = [
  new Wedge(Colour.Purple, HexagoNumber.Number3),
  new Wedge(Colour.Red, HexagoNumber.Number1),
  new Wedge(Colour.Yellow, HexagoNumber.Number3),
  new Wedge(Colour.Orange, HexagoNumber.Number2),
  new Wedge(Colour.Yellow, HexagoNumber.Number6),
  new Wedge(Colour.Green, HexagoNumber.Number5)
]

export const cardG = new Card(cardWedgesG)
export const placedCardG = new PlacedCard(cardG, 2, 2, Rotation.Rotation0)

import { Card } from '../src/card'
import { Colour, HexagoNumber, Rotation } from '../src/enums'
import { CardThings, Thing } from '../src/thing'
import { PlacedCard } from '../src/placedCard'

export const cardThingsA: CardThings = [
  new Thing(Colour.Green, HexagoNumber.Number5),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number3),
  new Thing(Colour.Red, HexagoNumber.Number2),
  new Thing(Colour.Orange, HexagoNumber.Number1),
  new Thing(Colour.Blue, HexagoNumber.Number2)
]

export const cardA = new Card(cardThingsA)
export const placedCardA = new PlacedCard(cardA, 0, 0, Rotation.Rotation0)

export const cardThingsB: CardThings = [
  new Thing(Colour.Green, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number4),
  new Thing(Colour.Red, HexagoNumber.Number3),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number6),
  new Thing(Colour.Orange, HexagoNumber.Number3)
]

export const cardB = new Card(cardThingsB)
export const placedCardB = new PlacedCard(cardB, 0, 2, Rotation.Rotation0)

export const cardThingsC: CardThings = [
  new Thing(Colour.Blue, HexagoNumber.Number6),
  new Thing(Colour.Orange, HexagoNumber.Number2),
  new Thing(Colour.Green, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number3)
]

export const cardC = new Card(cardThingsC)
export const placedCardC = new PlacedCard(cardC, 1, 1, Rotation.Rotation0)

export const cardThingsD: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number4),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Blue, HexagoNumber.Number6),
  new Thing(Colour.Purple, HexagoNumber.Number4),
  new Thing(Colour.Green, HexagoNumber.Number2),
  new Thing(Colour.Purple, HexagoNumber.Number1)
]

export const cardD = new Card(cardThingsD)
export const placedCardD = new PlacedCard(cardD, 1, -1, Rotation.Rotation0)

export const cardThingsE: CardThings = [
  new Thing(Colour.Purple, HexagoNumber.Number4),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number4),
  new Thing(Colour.Purple, HexagoNumber.Number3),
  new Thing(Colour.Orange, HexagoNumber.Number1)
]

export const cardE = new Card(cardThingsE)
export const placedCardE = new PlacedCard(cardE, 2, -2, Rotation.Rotation0)

export const cardThingsF: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number6),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Purple, HexagoNumber.Number2),
  new Thing(Colour.Green, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Blue, HexagoNumber.Number4)
]

export const cardF = new Card(cardThingsF)
export const placedCardF = new PlacedCard(cardF, 2, 0, Rotation.Rotation0)

export const cardThingsG: CardThings = [
  new Thing(Colour.Purple, HexagoNumber.Number3),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number3),
  new Thing(Colour.Orange, HexagoNumber.Number2),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number5)
]

export const cardG = new Card(cardThingsG)
export const placedCardG = new PlacedCard(cardG, 2, 2, Rotation.Rotation0)

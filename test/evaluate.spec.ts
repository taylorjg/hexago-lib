import { Board } from '../src/board'
import { Card } from '../src/card'
import { Colour, HexagoNumber, Rotation } from '../src/enums'
import { evaluatePlacedCard } from '../src/evaluate'
import { CardThings, Thing } from '../src/thing'
import { PlacedCard } from '../src/placedCard'

const cardThingsA: CardThings = [
  new Thing(Colour.Green, HexagoNumber.Number5),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number3),
  new Thing(Colour.Red, HexagoNumber.Number2),
  new Thing(Colour.Orange, HexagoNumber.Number1),
  new Thing(Colour.Blue, HexagoNumber.Number2)
]

const cardA = new Card(cardThingsA)
const placedCardA = new PlacedCard(cardA, 0, 0, Rotation.Rotation0)

const cardThingsB: CardThings = [
  new Thing(Colour.Green, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number4),
  new Thing(Colour.Red, HexagoNumber.Number3),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number6),
  new Thing(Colour.Orange, HexagoNumber.Number3)
]

const cardB = new Card(cardThingsB)
const placedCardB = new PlacedCard(cardB, 0, 2, Rotation.Rotation0)

const cardThingsC: CardThings = [
  new Thing(Colour.Blue, HexagoNumber.Number6),
  new Thing(Colour.Orange, HexagoNumber.Number2),
  new Thing(Colour.Green, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Red, HexagoNumber.Number3)
]

const cardC = new Card(cardThingsC)
const placedCardC = new PlacedCard(cardC, 1, 1, Rotation.Rotation0)

const cardThingsD: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number4),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Blue, HexagoNumber.Number6),
  new Thing(Colour.Purple, HexagoNumber.Number4),
  new Thing(Colour.Green, HexagoNumber.Number2),
  new Thing(Colour.Purple, HexagoNumber.Number1)
]

const cardD = new Card(cardThingsD)
const placedCardD = new PlacedCard(cardD, 1, -1, Rotation.Rotation0)

const cardThingsE: CardThings = [
  new Thing(Colour.Purple, HexagoNumber.Number4),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number4),
  new Thing(Colour.Purple, HexagoNumber.Number3),
  new Thing(Colour.Orange, HexagoNumber.Number1)
]

const cardE = new Card(cardThingsE)
const placedCardE = new PlacedCard(cardE, 2, -2, Rotation.Rotation0)

const cardThingsF: CardThings = [
  new Thing(Colour.Red, HexagoNumber.Number6),
  new Thing(Colour.Blue, HexagoNumber.Number5),
  new Thing(Colour.Purple, HexagoNumber.Number2),
  new Thing(Colour.Green, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number5),
  new Thing(Colour.Blue, HexagoNumber.Number4)
]

const cardF = new Card(cardThingsF)
const placedCardF = new PlacedCard(cardF, 2, 0, Rotation.Rotation0)

const cardThingsG: CardThings = [
  new Thing(Colour.Purple, HexagoNumber.Number3),
  new Thing(Colour.Red, HexagoNumber.Number1),
  new Thing(Colour.Yellow, HexagoNumber.Number3),
  new Thing(Colour.Orange, HexagoNumber.Number2),
  new Thing(Colour.Yellow, HexagoNumber.Number6),
  new Thing(Colour.Green, HexagoNumber.Number5)
]

const cardG = new Card(cardThingsG)
const placedCardG = new PlacedCard(cardG, 2, 2, Rotation.Rotation0)

describe('Evaluate tests', () => {

  describe('evaluatePlacedCard', () => {

    it('placing card C', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
      const possibleMove = evaluatePlacedCard(board, placedCardC)
      expect(possibleMove.score).toBe(34)
    })

    it('placing card D', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
        .placeCard(placedCardC)
      const possibleMove = evaluatePlacedCard(board, placedCardD)
      expect(possibleMove.score).toBe(52)
    })

    it('placing card E', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
        .placeCard(placedCardC)
        .placeCard(placedCardD)
      const possibleMove = evaluatePlacedCard(board, placedCardE)
      expect(possibleMove.score).toBe(16)
    })

    it('placing card F', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
        .placeCard(placedCardC)
        .placeCard(placedCardD)
        .placeCard(placedCardE)
      const possibleMove = evaluatePlacedCard(board, placedCardF)
      expect(possibleMove.score).toBe(81)
    })

    it('placing card G', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
        .placeCard(placedCardC)
        .placeCard(placedCardD)
        .placeCard(placedCardE)
        .placeCard(placedCardF)
      const possibleMove = evaluatePlacedCard(board, placedCardG)
      expect(possibleMove.score).toBe(20)
    })

    it('placing card G (better move)', () => {
      const board = Board.empty
        .placeCard(placedCardA)
        .placeCard(placedCardB)
        .placeCard(placedCardC)
        .placeCard(placedCardD)
        .placeCard(placedCardE)
        .placeCard(placedCardF)
      const placedCardGBetter = new PlacedCard(cardG, 3, -1, Rotation.Rotation60)
      const possibleMove = evaluatePlacedCard(board, placedCardGBetter)
      expect(possibleMove.score).toBe(60)
    })
  })
})

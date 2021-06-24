import { Board } from '../src/board'
import { Rotation } from '../src/enums'
import { evaluatePlacedCard } from '../src/evaluate'
import { PlacedCard } from '../src/placedCard'
import * as E from './exampleCards'

describe('Evaluate tests', () => {

  describe('evaluatePlacedCard', () => {

    it('placing card C', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
      const possibleMove = evaluatePlacedCard(board, E.placedCardC)
      expect(possibleMove.score).toBe(34)
    })

    it('placing card D', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
        .placeCard(E.placedCardC)
      const possibleMove = evaluatePlacedCard(board, E.placedCardD)
      expect(possibleMove.score).toBe(52)
    })

    it('placing card E', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
        .placeCard(E.placedCardC)
        .placeCard(E.placedCardD)
      const possibleMove = evaluatePlacedCard(board, E.placedCardE)
      expect(possibleMove.score).toBe(16)
    })

    it('placing card F', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
        .placeCard(E.placedCardC)
        .placeCard(E.placedCardD)
        .placeCard(E.placedCardE)
      const possibleMove = evaluatePlacedCard(board, E.placedCardF)
      expect(possibleMove.score).toBe(81)
    })

    it('placing card G', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
        .placeCard(E.placedCardC)
        .placeCard(E.placedCardD)
        .placeCard(E.placedCardE)
        .placeCard(E.placedCardF)
      const possibleMove = evaluatePlacedCard(board, E.placedCardG)
      expect(possibleMove.score).toBe(20)
    })

    it('placing card G (better move)', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
        .placeCard(E.placedCardC)
        .placeCard(E.placedCardD)
        .placeCard(E.placedCardE)
        .placeCard(E.placedCardF)
      const placedCardGBetter = new PlacedCard(E.cardG, 3, -1, Rotation.Rotation60)
      const possibleMove = evaluatePlacedCard(board, placedCardGBetter)
      expect(possibleMove.score).toBe(60)
    })
  })
})

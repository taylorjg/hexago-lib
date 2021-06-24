import { Board } from "../src/board"
import { Cell } from "../src/cell"
import * as E from './exampleCards'

describe('Board tests', () => {

  describe('findAvailableCardPositions', () => {

    it('with no cards placed', () => {
      const availableCardPositions = Board.empty.findAvailableCardPositions()
      expect(availableCardPositions).toHaveLength(1)
      expect(availableCardPositions[0].equals(new Cell(0, 0))).toBe(true)
    })

    it('with one card placed', () => {
      const board = Board.empty.placeCard(E.placedCardA)
      const availableCardPositions = board.findAvailableCardPositions()
      expect(availableCardPositions).toHaveLength(6)
    })

    it('with two cards placed', () => {
      const board = Board.empty
        .placeCard(E.placedCardA)
        .placeCard(E.placedCardB)
      const availableCardPositions = board.findAvailableCardPositions()
      expect(availableCardPositions).toHaveLength(10)
    })
  })
})

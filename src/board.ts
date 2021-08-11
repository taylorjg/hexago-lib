import { Cell } from './cell'
import { Match } from './match'
import { PlacedCard } from './placedCard'

export type BoardBounds = {
  left: number,
  right: number,
  top: number,
  bottom: number
}

export class Board {

  private static neighbourData = [
    { wedgeIndex: 0, rowOffset: -1, colOffset: 1 },
    { wedgeIndex: 1, rowOffset: 0, colOffset: 2 },
    { wedgeIndex: 2, rowOffset: 1, colOffset: 1 },
    { wedgeIndex: 3, rowOffset: 1, colOffset: -1 },
    { wedgeIndex: 4, rowOffset: 0, colOffset: -2 },
    { wedgeIndex: 5, rowOffset: -1, colOffset: -1 }
  ]

  public static readonly empty: Board = new Board([])

  private constructor(private readonly placedCards: readonly PlacedCard[]) {
  }

  public canPlaceCardAt(proposedRow: number, proposedCol: number): boolean {
    const index = this.placedCards.findIndex(pc => pc.row == proposedRow && pc.col == proposedCol)
    return index < 0
  }

  public placeCard(placedCard: PlacedCard): Board {
    const newPlacedCards = this.placedCards.slice()
    newPlacedCards.push(placedCard)
    return new Board(newPlacedCards)
  }

  public findAvailableCardPositions(): Cell[] {
    if (this.placedCards.length == 0) return [new Cell(0, 0)]
    const availableCardPositions: Cell[] = []
    const addAvailableCardPosition = (row: number, col: number): void => {
      const cell = new Cell(row, col)
      const index = availableCardPositions.findIndex(availableCardPosition => availableCardPosition.equals(cell))
      if (index < 0) {
        availableCardPositions.push(cell)
      }
    }
    for (const placedCard of this.placedCards) {
      for (const { rowOffset, colOffset } of Board.neighbourData) {
        const proposedRow = placedCard.row + rowOffset
        const proposedCol = placedCard.col + colOffset
        addAvailableCardPosition(proposedRow, proposedCol)
      }
    }
    return availableCardPositions.filter(cell => this.canPlaceCardAt(cell.row, cell.col))
  }

  public findMatches(placedCard: PlacedCard): Match[] {
    return Board.neighbourData
      .flatMap(({ wedgeIndex, rowOffset, colOffset }) => {
        const otherRow = placedCard.row + rowOffset
        const otherCol = placedCard.col + colOffset
        const otherPlacedCard = this.placedCards.find(pc => pc.row == otherRow && pc.col == otherCol)
        const matches = []
        if (otherPlacedCard) {
          const otherWedgeIndex = (wedgeIndex + 3) % 6
          matches.push(new Match(placedCard, wedgeIndex, otherPlacedCard, otherWedgeIndex))
        }
        return matches
      })
      .filter(match => match.score > 0)
  }

  public getBounds(): BoardBounds {
    const rows = this.placedCards.map(placedCard => placedCard.row)
    const cols = this.placedCards.map(placedCard => placedCard.col)
    const left = Math.min(0, ...cols)
    const right = Math.max(0, ...cols)
    const top = Math.min(0, ...rows)
    const bottom = Math.max(0, ...rows)
    return { left, right, top, bottom }
  }
}

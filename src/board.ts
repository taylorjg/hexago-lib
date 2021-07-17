import { Cell } from './cell'
import { Match } from './match'
import { PlacedCard } from './placedCard'

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
    return this.placedCards.flatMap(placedCard => {
      return Board.neighbourData.flatMap(({ rowOffset, colOffset }) => {
        const proposedRow = placedCard.row + rowOffset
        const proposedCol = placedCard.col + colOffset
        const cells = []
        if (this.canPlaceCardAt(proposedRow, proposedCol)) {
          cells.push(new Cell(proposedRow, proposedCol))
        }
        return cells
      })
    })
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

  public getBoundaries(): [number, number, number, number] {
    let leftMostCol
    let rightMostCol
    let topMostRow
    let bottomMostRow
    for (const placedCard of this.placedCards) {
      const row = placedCard.row
      const col = placedCard.col
      if (leftMostCol == undefined || col < leftMostCol) {
        leftMostCol = col
      }
      if (rightMostCol == undefined || col > rightMostCol) {
        rightMostCol = col
      }
      if (topMostRow == undefined || row < topMostRow) {
        topMostRow = row
      }
      if (bottomMostRow == undefined || row > bottomMostRow) {
        bottomMostRow = row
      }
    }
    return [leftMostCol ?? 0, rightMostCol ?? 0, topMostRow ?? 0, bottomMostRow ?? 0]
  }
}

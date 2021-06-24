import { Cell } from './cell'
import { Match } from './match'
import { PlacedCard } from './placedCard'

export class Board {

  private static neighbourData: [number, number, number, number][] = [
    [-1, 1, 0, 3],
    [0, 2, 1, 4,],
    [1, 1, 2, 5,],
    [1, -1, 3, 0],
    [0, -2, 4, 1],
    [-1, -1, 5, 2]
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
      return Board.neighbourData.flatMap(([rowOffset, colOffset]) => {
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
      .flatMap(([rowOffset, colOffset, thisSlot, otherSlot]) => {
        const otherRow = placedCard.row + rowOffset
        const otherCol = placedCard.col + colOffset
        const otherPlacedCard = this.placedCards.find(pc => pc.row == otherRow && pc.col == otherCol)
        const matches = []
        if (otherPlacedCard) {
          const thing1 = placedCard.thingAt(thisSlot)
          const thing2 = otherPlacedCard.thingAt(otherSlot)
          matches.push(new Match(thing1, thing2))
        }
        return matches
      })
      .filter(match => match.score > 0)
  }
}

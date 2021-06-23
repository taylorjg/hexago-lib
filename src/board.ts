import { Cell } from './cell'
import { Match } from './match'
import { PlacedCard } from './placedCard'

export class Board {

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
    // TODO
    return []
  }

  public findMatches(placedCard: PlacedCard): Match[] {

    const neighbourData = [
      [0, 3, -1, 1],
      [1, 4, 0, 2],
      [2, 5, 1, 1],
      [3, 0, 1, -1],
      [4, 1, 0, -2],
      [5, 2, -1, -1]
    ]

    return neighbourData
      .flatMap(([thisSlot, otherSlot, rowOffset, colOffset]) => {
        const otherRow = placedCard.row + rowOffset
        const otherCol = placedCard.col + colOffset
        const otherPlacedCard = this.placedCards.find(pc => pc.row == otherRow && pc.col == otherCol)
        if (otherPlacedCard) {
          const thing1 = placedCard.thingAt(thisSlot)
          const thing2 = otherPlacedCard.thingAt(otherSlot)
          return [new Match(thing1, thing2)]
        }
        return []
      })
      .filter(match => match.score > 0)
  }
}

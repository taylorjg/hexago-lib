import { PlacedCard } from './placedCard'
import { Wedge } from './wedge'

export class Match {

  public readonly wedge: Wedge
  public readonly otherWedge: Wedge
  public readonly coloursMatch: boolean
  public readonly numbersMatch: boolean
  public readonly score: number

  public constructor(
    public readonly placedCard: PlacedCard,
    public readonly wedgeIndex: number,
    public readonly otherPlacedCard: PlacedCard,
    public readonly otherWedgeIndex: number,
  ) {
    this.wedge = placedCard.wedgeAt(wedgeIndex)
    this.otherWedge = otherPlacedCard.wedgeAt(otherWedgeIndex)
    this.coloursMatch = this.wedge.colour == this.otherWedge.colour
    this.numbersMatch = this.wedge.number == this.otherWedge.number
    const sum = this.wedge.number + this.otherWedge.number
    const multiplier = (this.coloursMatch ? 1 : 0) + (this.numbersMatch ? 1 : 0)
    this.score = sum * multiplier
  }
}

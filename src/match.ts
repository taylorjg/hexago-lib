import { PlacedCard } from './placedCard'

export class Match {

  public readonly coloursMatch: boolean
  public readonly numbersMatch: boolean
  public readonly score: number

  public constructor(
    public readonly placedCard: PlacedCard,
    public readonly wedgeIndex: number,
    public readonly otherPlacedCard: PlacedCard,
    public readonly otherWedgeIndex: number,
  ) {
    const wedge = this.placedCard.wedgeAt(this.wedgeIndex)
    const otherWedge = this.otherPlacedCard.wedgeAt(this.otherWedgeIndex)
    this.coloursMatch = wedge.colour == otherWedge.colour
    this.numbersMatch = wedge.number == otherWedge.number
    const sum = wedge.number + otherWedge.number
    const multiplier = (this.coloursMatch ? 1 : 0) + (this.numbersMatch ? 1 : 0)
    this.score = sum * multiplier
  }
}

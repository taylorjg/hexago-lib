import { Wedge } from './wedge'

export class Match {

  public readonly coloursMatch: boolean
  public readonly numbersMatch: boolean
  public readonly score: number

  // TODO: introduce a new class to bundle a wedge, wedgeIndex and placedCard together ?
  public constructor(
    public readonly wedge1: Wedge,
    public readonly wedge2: Wedge
  ) {
    this.coloursMatch = this.wedge1.colour == this.wedge2.colour
    this.numbersMatch = this.wedge1.number == this.wedge2.number
    if (!this.coloursMatch && !this.numbersMatch) {
      this.score = 0
    } else {
      const sum = this.wedge1.number + this.wedge2.number
      const double = this.coloursMatch && this.numbersMatch
      this.score = double ? 2 * sum : sum
    }
  }
}

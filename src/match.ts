import { Thing } from './thing'

export class Match {

  public readonly coloursMatch: boolean
  public readonly numbersMatch: boolean
  public readonly score: number

  // TODO: need to add card1, card2, slot1, slot2 so we can draw highlights ?
  public constructor(
    public readonly thing1: Thing,
    public readonly thing2: Thing
  ) {
    this.coloursMatch = this.thing1.colour == this.thing2.colour
    this.numbersMatch = this.thing1.number == this.thing2.number
    if (!this.coloursMatch && !this.numbersMatch) {
      this.score = 0
    } else {
      const sum = this.thing1.number + this.thing2.number
      const double = this.coloursMatch && this.numbersMatch
      this.score = double ? 2 * sum : sum
    }
  }
}

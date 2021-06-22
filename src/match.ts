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
    const total = this.thing1.number + this.thing2.number
    const multiplier = this.coloursMatch && this.numbersMatch ? 2 : 1
    this.score = total * multiplier
  }
}

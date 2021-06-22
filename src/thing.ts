import { Colour, HexagoNumber } from './enums'

export class Thing {

  public constructor(
    public readonly colour: Colour,
    public readonly number: HexagoNumber
  ) {
  }

  public toString(): string {
    return `[Thing] colour: ${this.colour}; number: ${this.number}`
  }
}

export type CardThings = readonly [Thing, Thing, Thing, Thing, Thing, Thing]

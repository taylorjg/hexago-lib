import { Colour, HexagoNumber } from './enums'

export class Wedge {

  public constructor(
    public readonly colour: Colour,
    public readonly number: HexagoNumber
  ) {
  }
}

export type CardWedges = readonly [Wedge, Wedge, Wedge, Wedge, Wedge, Wedge]

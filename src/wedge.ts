import { Colour, HexagoNumber } from './enums'

export class Wedge {

  public constructor(
    public readonly colour: Colour,
    public readonly number: HexagoNumber
  ) {
  }

  public static fromString(s: string): Wedge {
    const colour = Wedge.stringToColour(s[0])
    const number = Wedge.stringToNumber(s[1])
    return new Wedge(colour, number)
  }

  private static stringToColour(s: string): Colour {
    switch (s) {
      case 'R': return Colour.Red
      case 'G': return Colour.Green
      case 'B': return Colour.Blue
      case 'Y': return Colour.Yellow
      case 'O': return Colour.Orange
      case 'P': return Colour.Purple
    }
    throw new Error(`[Wedge.stringToColour] unknown colour "${s}"`)
  }

  private static stringToNumber(s: string): HexagoNumber {
    switch (s) {
      case '1': return HexagoNumber.Number1
      case '2': return HexagoNumber.Number2
      case '3': return HexagoNumber.Number3
      case '4': return HexagoNumber.Number4
      case '5': return HexagoNumber.Number5
      case '6': return HexagoNumber.Number6
    }
    throw new Error(`[Wedge.stringToNumber] unknown number "${s}"`)
  }
}

export type CardWedges = readonly [Wedge, Wedge, Wedge, Wedge, Wedge, Wedge]

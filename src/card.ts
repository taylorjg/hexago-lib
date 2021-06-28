import { Rotation } from './enums'
import { CardWedges, Wedge } from './wedge'

export class Card {

  public constructor(private readonly wedges: CardWedges) {
  }

  public wedgeAt(wedgeIndex: number, rotation: Rotation): Wedge {
    const numWedges = this.wedges.length
    const wedgeIndexAfterRotation = (wedgeIndex - rotation + numWedges) % numWedges
    return this.wedges[wedgeIndexAfterRotation]
  }

  public static fromString(s: string): Card {
    const wedgeStrings = s.split('-')
    const wedges = wedgeStrings.map(Wedge.fromString)
    if (wedges.length != 6) {
      throw new Error(`[Card.fromString] string has wrong format "${s}"`)
    }
    return new Card(<CardWedges><unknown>wedges)
  }
}

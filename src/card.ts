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
}

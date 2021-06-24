import { Card } from './card'
import { Rotation } from './enums'
import { Wedge } from './wedge'

export class PlacedCard {

  public constructor(
    public readonly card: Card,
    public readonly row: number,
    public readonly col: number,
    public readonly rotation: Rotation) {
  }

  public wedgeAt(wedgeIndex: number): Wedge {
    return this.card.wedgeAt(wedgeIndex, this.rotation)
  }
}

import { Card } from './card'
import { Rotation } from './enums'
import { Thing } from './thing'

export class PlacedCard {

  public constructor(
    public readonly card: Card,
    public readonly row: number,
    public readonly col: number,
    public readonly rotation: Rotation) {
  }

  public thingAt(slot: number): Thing {
    return this.card.thingAt(slot, this.rotation)
  }

  // TODO: finish implementing this
  public toString(): string {
    return '[PlacedCard] TODO'
  }
}

import { Rotation } from './enums'
import { CardThings, Thing } from './thing'

export class Card {

  public constructor(private readonly things: CardThings) {
  }

  public thingAt(slot: number, rotation: Rotation): Thing {
    const index = (slot - rotation) % this.things.length
    return this.things[index]
  }

  // TODO: finish implementing this
  public toString(): string {
    return '[Card] TODO'
  }
}

import { Rotation } from './enums'
import { CardThings, Thing } from './thing'

export class Card {

  public constructor(private readonly things: CardThings) {
  }

  public thingAt(slot: number, rotation: Rotation): Thing {
    const numSlots = this.things.length
    const index = (slot - rotation + numSlots) % numSlots
    return this.things[index]
  }

  // TODO: finish implementing this
  public toString(): string {
    return '[Card] TODO'
  }
}

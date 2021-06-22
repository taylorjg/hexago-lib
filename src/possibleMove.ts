import { PlacedCard } from './placedCard'
import { Match } from './match'

export class PossibleMove {

  public readonly score: number

  public constructor(
    public readonly placedCard: PlacedCard,
    public readonly matches: readonly Match[]
  ) {
    const total = matches.reduce((acc, match) => acc + match.score, 0)
    const multiplier = matches.length
    this.score = total * multiplier
  }
}

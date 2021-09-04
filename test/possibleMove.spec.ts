import { Match, PossibleMove } from '../src'
import * as E from './exampleCards'

describe('PossibleMove tests', () => {

  it('1 match', () => {
    // Card A Y6 at wedge index 1 and Card B R6 at wedge index 4
    const match1 = new Match(E.placedCardA, 1, E.placedCardB, 4)
    const possibleMove = new PossibleMove(E.placedCardA, [match1])
    expect(possibleMove.score).toBe(match1.score)
  })

  it('2 matches', () => {
    // Card D R4 at wedge index 0 and Card A R2 at wedge index 3
    const match1 = new Match(E.placedCardD, 0, E.placedCardA, 3)
    // Card D Y5 at wedge index 1 and Card C Y5 at wedge index 4
    const match2 = new Match(E.placedCardD, 1, E.placedCardC, 4)
    const possibleMove = new PossibleMove(E.placedCardD, [match1, match2])
    expect(possibleMove.score).toBe((match1.score + match2.score) * 2)
  })

  it('2 matches', () => {
    // Card F Y5 at wedge index 4 and Card E B5 at wedge index 1
    const match1 = new Match(E.placedCardF, 4, E.placedCardE, 1)
    // Card F B4 at wedge index 5 and Card D B6 at wedge index 2
    const match2 = new Match(E.placedCardF, 5, E.placedCardD, 2)
    // Card F R6 at wedge index 0 and Card C R1 at wedge index 3
    const match3 = new Match(E.placedCardF, 0, E.placedCardC, 3)
    const possibleMove = new PossibleMove(E.placedCardF, [match1, match2, match3])
    expect(possibleMove.score).toBe((match1.score + match2.score + match3.score) * 3)
  })
})

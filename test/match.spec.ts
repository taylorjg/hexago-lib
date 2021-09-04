import { Match } from '../src'
import * as E from './exampleCards'

describe('Match tests', () => {

  it('nothing matching', () => {
    // Card F B5 at wedge index 1 and Card G Y6 at wedge index 4
    const match = new Match(E.placedCardF, 1, E.placedCardG, 4)
    expect(match.score).toBe(0)
  })

  it('matching colours', () => {
    // Card F B4 at wedge index 5 and Card D B6 at wedge index 2
    const match = new Match(E.placedCardF, 5, E.placedCardD, 2)
    expect(match.score).toBe(4 + 6)
  })

  it('matching numbers', () => {
    // Card C R3 at wedge index 5 and Card A G3 at wedge index 2
    const match = new Match(E.placedCardC, 5, E.placedCardA, 2)
    expect(match.score).toBe(3 + 3)
  })

  it('matching colours and numbers', () => {
    // Card E P4 at wedge index 0 and Card D P4 at wedge index 3
    const match = new Match(E.placedCardE, 0, E.placedCardD, 3)
    expect(match.score).toBe((4 + 4) * 2)
  })
})

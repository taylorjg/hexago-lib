import { Colour, HexagoNumber } from '../src/enums'
import { Match } from '../src/match'
import { Thing } from '../src/thing'

describe('Match tests', () => {

  it('matching colours', () => {
    const thing1 = new Thing(Colour.Colour1, HexagoNumber.Number1)
    const thing2 = new Thing(Colour.Colour1, HexagoNumber.Number6)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe(1 + 6)
  })

  it('matching numbers', () => {
    const thing1 = new Thing(Colour.Colour1, HexagoNumber.Number3)
    const thing2 = new Thing(Colour.Colour4, HexagoNumber.Number3)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe(3 + 3)
  })

  it('matching colours and numbers', () => {
    const thing1 = new Thing(Colour.Colour5, HexagoNumber.Number4)
    const thing2 = new Thing(Colour.Colour5, HexagoNumber.Number4)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe((4 + 4) * 2)
  })
})

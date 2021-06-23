import { Colour, HexagoNumber } from '../src/enums'
import { Match } from '../src/match'
import { Thing } from '../src/thing'

describe('Match tests', () => {

  it('nothing matching', () => {
    const thing1 = new Thing(Colour.Red, HexagoNumber.Number2)
    const thing2 = new Thing(Colour.Blue, HexagoNumber.Number4)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe(0)
  })

  it('matching colours', () => {
    const thing1 = new Thing(Colour.Red, HexagoNumber.Number1)
    const thing2 = new Thing(Colour.Red, HexagoNumber.Number6)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe(1 + 6)
  })

  it('matching numbers', () => {
    const thing1 = new Thing(Colour.Red, HexagoNumber.Number3)
    const thing2 = new Thing(Colour.Yellow, HexagoNumber.Number3)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe(3 + 3)
  })

  it('matching colours and numbers', () => {
    const thing1 = new Thing(Colour.Orange, HexagoNumber.Number4)
    const thing2 = new Thing(Colour.Orange, HexagoNumber.Number4)
    const match = new Match(thing1, thing2)
    expect(match.score).toBe((4 + 4) * 2)
  })
})

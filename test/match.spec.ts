import { Colour, HexagoNumber } from '../src/enums'
import { Match } from '../src/match'
import { Wedge } from '../src/wedge'

describe('Match tests', () => {

  it('nothing matching', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number2)
    const wedge2 = new Wedge(Colour.Blue, HexagoNumber.Number4)
    const match = new Match(wedge1, wedge2)
    expect(match.score).toBe(0)
  })

  it('matching colours', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number1)
    const wedge2 = new Wedge(Colour.Red, HexagoNumber.Number6)
    const match = new Match(wedge1, wedge2)
    expect(match.score).toBe(1 + 6)
  })

  it('matching numbers', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number3)
    const wedge2 = new Wedge(Colour.Yellow, HexagoNumber.Number3)
    const match = new Match(wedge1, wedge2)
    expect(match.score).toBe(3 + 3)
  })

  it('matching colours and numbers', () => {
    const wedge1 = new Wedge(Colour.Orange, HexagoNumber.Number4)
    const wedge2 = new Wedge(Colour.Orange, HexagoNumber.Number4)
    const match = new Match(wedge1, wedge2)
    expect(match.score).toBe((4 + 4) * 2)
  })
})

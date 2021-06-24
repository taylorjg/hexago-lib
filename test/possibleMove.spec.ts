import { Card } from '../src/card'
import { Colour, HexagoNumber, Rotation } from '../src/enums'
import { Match } from '../src/match'
import { PossibleMove } from '../src/possibleMove'
import { CardWedges, Wedge } from '../src/wedge'
import { PlacedCard } from '../src/placedCard'

const cardWedges: CardWedges = [
  new Wedge(Colour.Green, HexagoNumber.Number5),
  new Wedge(Colour.Yellow, HexagoNumber.Number6),
  new Wedge(Colour.Green, HexagoNumber.Number3),
  new Wedge(Colour.Red, HexagoNumber.Number2),
  new Wedge(Colour.Orange, HexagoNumber.Number1),
  new Wedge(Colour.Blue, HexagoNumber.Number2)
]

const card = new Card(cardWedges)
const placedCard = new PlacedCard(card, 0, 0, Rotation.Rotation0)

describe('PossibleMove tests', () => {

  it('1 match', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number2)
    const wedge2 = new Wedge(Colour.Red, HexagoNumber.Number6)
    const match = new Match(wedge1, wedge2)
    const possibleMove = new PossibleMove(placedCard, [match])
    expect(possibleMove.score).toBe(match.score)
  })

  it('2 matches', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number2)
    const wedge2 = new Wedge(Colour.Red, HexagoNumber.Number6)
    const match1 = new Match(wedge1, wedge2)
    const wedge3 = new Wedge(Colour.Green, HexagoNumber.Number3)
    const wedge4 = new Wedge(Colour.Yellow, HexagoNumber.Number3)
    const match2 = new Match(wedge3, wedge4)
    const possibleMove = new PossibleMove(placedCard, [match1, match2])
    expect(possibleMove.score).toBe((match1.score + match2.score) * 2)
  })

  it('3 matches', () => {
    const wedge1 = new Wedge(Colour.Red, HexagoNumber.Number2)
    const wedge2 = new Wedge(Colour.Red, HexagoNumber.Number6)
    const match1 = new Match(wedge1, wedge2)
    const wedge3 = new Wedge(Colour.Green, HexagoNumber.Number3)
    const wedge4 = new Wedge(Colour.Yellow, HexagoNumber.Number3)
    const match2 = new Match(wedge3, wedge4)
    const wedge5 = new Wedge(Colour.Yellow, HexagoNumber.Number6)
    const wedge6 = new Wedge(Colour.Yellow, HexagoNumber.Number6)
    const match3 = new Match(wedge5, wedge6)
    const possibleMove = new PossibleMove(placedCard, [match1, match2, match3])
    expect(possibleMove.score).toBe((match1.score + match2.score + match3.score) * 3)
  })
})

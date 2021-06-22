import { Card } from '../src/card'
import { Colour, HexagoNumber, Rotation } from '../src/enums'
import { Match } from '../src/match'
import { PossibleMove } from '../src/possibleMove'
import { CardThings, Thing } from '../src/thing'
import { PlacedCard } from '../src/placedCard'

const cardThings: CardThings = [
  new Thing(Colour.Colour1, HexagoNumber.Number1),
  new Thing(Colour.Colour1, HexagoNumber.Number1),
  new Thing(Colour.Colour1, HexagoNumber.Number1),
  new Thing(Colour.Colour1, HexagoNumber.Number1),
  new Thing(Colour.Colour1, HexagoNumber.Number1),
  new Thing(Colour.Colour1, HexagoNumber.Number1)
]

const card = new Card(cardThings)
const placedCard = new PlacedCard(card, 0, 0, Rotation.Rotation0)

describe('PossibleMove tests', () => {

  it('1 match', () => {
    const thing1 = new Thing(Colour.Colour1, HexagoNumber.Number1)
    const thing2 = new Thing(Colour.Colour1, HexagoNumber.Number6)
    const match = new Match(thing1, thing2)
    const possibleMove = new PossibleMove(placedCard, [match])
    expect(possibleMove.score).toBe(match.score)
  })

  it('2 matches', () => {
    const thing1 = new Thing(Colour.Colour1, HexagoNumber.Number1)
    const thing2 = new Thing(Colour.Colour1, HexagoNumber.Number6)
    const match1 = new Match(thing1, thing2)
    const thing3 = new Thing(Colour.Colour1, HexagoNumber.Number3)
    const thing4 = new Thing(Colour.Colour4, HexagoNumber.Number3)
    const match2 = new Match(thing3, thing4)
    const possibleMove = new PossibleMove(placedCard, [match1, match2])
    expect(possibleMove.score).toBe((match1.score + match2.score) * 2)
  })

  it('3 matches', () => {
    const thing1 = new Thing(Colour.Colour1, HexagoNumber.Number1)
    const thing2 = new Thing(Colour.Colour1, HexagoNumber.Number6)
    const match1 = new Match(thing1, thing2)
    const thing3 = new Thing(Colour.Colour1, HexagoNumber.Number3)
    const thing4 = new Thing(Colour.Colour4, HexagoNumber.Number3)
    const match2 = new Match(thing3, thing4)
    const thing5 = new Thing(Colour.Colour5, HexagoNumber.Number4)
    const thing6 = new Thing(Colour.Colour5, HexagoNumber.Number4)
    const match3 = new Match(thing5, thing6)
    const possibleMove = new PossibleMove(placedCard, [match1, match2, match3])
    expect(possibleMove.score).toBe((match1.score + match2.score + match3.score) * 3)
  })
})

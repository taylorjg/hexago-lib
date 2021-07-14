import arrayShuffle from 'array-shuffle'
import { Card } from './card'
import { Rotation } from './enums'

const cardStrings = [
  'G1-P5-O6-P2-R3-B2',
  'G4-B3-Y1-P6-O4-B2',
  'R2-O3-B5-G3-P6-O1',
  'P3-G4-Y6-B3-R1-B2',
  'O5-B3-Y6-R4-P1-Y4',
  'G2-O6-P5-Y1-P4-R5',
  'R1-B3-Y6-B5-P3-O4',
  'R3-B5-R6-O3-G1-Y4',
  'O2-B6-Y4-G2-Y1-P5',
  'B4-P5-O1-R5-O6-Y2',
  'Y4-R5-Y1-B6-O5-G2',
  'R4-B2-O6-P1-R5-G2',
  'B6-P4-G2-P1-R4-Y5',
  'B6-O2-G5-R1-Y5-R3',
  'P3-O1-P4-B5-Y6-G4',
  'G6-R4-O5-P4-O3-B1',
  'Y1-R6-P5-O4-Y3-G5',
  'G6-R1-O5-B3-R4-P3',
  'P6-R5-Y3-P1-O3-G4',
  'G5-Y6-G3-R2-O1-B2',
  'B1-O5-G6-R2-G3-P2',
  'Y2-G4-P1-R6-G3-B4',
  'G4-Y3-B4-P2-G1-R6',
  'O4-B1-P4-Y2-O6-R3',
  'Y3-P6-G2-O1-R2-P5',
  'G1-Y5-G6-B3-P2-R3',
  'Y3-O2-Y6-G5-P3-R1',
  'G5-P6-O3-B1-Y5-O2',
  'Y5-O6-G5-R3-B4-G1',
  'B5-R6-Y2-R5-P1-O4',
  'B4-Y2-O5-R1-P6-O2',
  'P2-G1-Y5-B4-R6-B5',
  'B1-O3-R2-B6-Y4-G3',
  'B2-G6-Y2-B1-O4-P3',
  'O1-R4-G6-R2-P4-Y3',
  'G3-Y1-O2-Y4-P2-B6',
]

export class Deck {

  public static readonly originalCards: readonly Card[] = cardStrings.map(Card.fromString)

  private cards: Card[]

  constructor() {
    this.cards = arrayShuffle(Deck.originalCards)
  }

  public reset(): void {
    this.cards = arrayShuffle(Deck.originalCards)
  }

  public nextCard(): Card {
    const maybeCard = this.cards.shift()
    if (!maybeCard) {
      throw new Error('[Deck#nextCard] deck is empty')
    }
    return maybeCard
  }

  public get numCardsLeft() {
    return this.cards.length
  }

  public static findCard(s: string): [Card, Rotation] {
    const tempCard = Card.fromString(s)
    const rotations = [
      Rotation.Rotation0,
      Rotation.Rotation60,
      Rotation.Rotation120,
      Rotation.Rotation180,
      Rotation.Rotation240,
      Rotation.Rotation300
    ]
    for (const rotation of rotations) {
      const maybeCard = Deck.findCardInternal(tempCard, rotation)
      if (maybeCard) {
        return [maybeCard, rotation]
      }
    }
    throw new Error('[Deck.findCard] card not found')
  }

  private static findCardInternal(tempCard: Card, rotation: Rotation): Card | undefined {
    return Deck.originalCards.find(card =>
      [0, 1, 2, 3, 4, 5].every(wedgeIndex =>
        card.wedgeAt(wedgeIndex, rotation).equals(tempCard.wedgeAt(wedgeIndex, Rotation.Rotation0))
      ))
  }
}

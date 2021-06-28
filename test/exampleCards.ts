import { Card } from '../src/card'
import { Rotation } from '../src/enums'
import { PlacedCard } from '../src/placedCard'

export const cardA = Card.fromString('G5-Y6-G3-R2-O1-B2')
export const placedCardA = new PlacedCard(cardA, 0, 0, Rotation.Rotation0)

export const cardB = Card.fromString('G1-Y4-R3-B5-R6-O3')
export const placedCardB = new PlacedCard(cardB, 0, 2, Rotation.Rotation0)

export const cardC = Card.fromString('B6-O2-G5-R1-Y5-R3')
export const placedCardC = new PlacedCard(cardC, 1, 1, Rotation.Rotation0)

export const cardD = Card.fromString('R4-Y5-B6-P4-G2-P1')
export const placedCardD = new PlacedCard(cardD, 1, -1, Rotation.Rotation0)

export const cardE = Card.fromString('P4-B5-Y6-G4-P3-O1')
export const placedCardE = new PlacedCard(cardE, 2, -2, Rotation.Rotation0)

export const cardF = Card.fromString('R6-B5-P2-G1-Y5-B4')
export const placedCardF = new PlacedCard(cardF, 2, 0, Rotation.Rotation0)

export const cardG = Card.fromString('P3-R1-Y3-O2-Y6-G5')
export const placedCardG = new PlacedCard(cardG, 2, 2, Rotation.Rotation0)

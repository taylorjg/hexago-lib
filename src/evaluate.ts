import { Board } from './board'
import { Card } from './card'
import { PlacedCard } from './placedCard'
import { PossibleMove } from './possibleMove'
// import { Thing } from './thing'

export const evaluatePlacedCard = (board: Board, placedCard: PlacedCard): PossibleMove => {
  return new PossibleMove(placedCard, [])
}

export const evaluateCard = (board: Board, card: Card): PossibleMove[] => {
  return []
}

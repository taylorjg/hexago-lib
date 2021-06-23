import { Board } from './board'
import { Card } from './card'
import { Rotation } from './enums'
import { PlacedCard } from './placedCard'
import { PossibleMove } from './possibleMove'

export const evaluatePlacedCard = (board: Board, placedCard: PlacedCard): PossibleMove => {
  const newBoard = board.placeCard(placedCard)
  const matches = newBoard.findMatches(placedCard)
  return new PossibleMove(placedCard, matches)
}

export const evaluateCard = (board: Board, card: Card): PossibleMove[] => {

  const rotations = [
    Rotation.Rotation0,
    Rotation.Rotation60,
    Rotation.Rotation120,
    Rotation.Rotation180,
    Rotation.Rotation240,
    Rotation.Rotation300
  ]

  const availableCardPositions = board.findAvailableCardPositions()
  const possibleMoves = availableCardPositions.flatMap(cell =>
    rotations.map(rotation => {
      const placedCard = new PlacedCard(card, cell.row, cell.col, rotation)
      const possibleMove = evaluatePlacedCard(board, placedCard)
      return possibleMove
    })
  )
  return possibleMoves.sort((pm1, pm2) => pm2.score - pm1.score)
}

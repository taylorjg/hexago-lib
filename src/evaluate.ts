import { Board } from './board'
import { Card } from './card'
import { allRotations } from './enums'
import { PlacedCard } from './placedCard'
import { PossibleMove } from './possibleMove'

export const evaluatePlacedCard = (board: Board, placedCard: PlacedCard): PossibleMove => {
  const newBoard = board.placeCard(placedCard)
  const matches = newBoard.findMatches(placedCard)
  return new PossibleMove(placedCard, matches)
}

export const evaluateCard = (board: Board, card: Card): PossibleMove[] => {
  const availableCardPositions = board.findAvailableCardPositions()
  const possibleMoves = availableCardPositions.flatMap(cell =>
    allRotations.map(rotation => {
      const placedCard = new PlacedCard(card, cell.row, cell.col, rotation)
      const possibleMove = evaluatePlacedCard(board, placedCard)
      return possibleMove
    })
  )
  return possibleMoves.sort((pm1, pm2) => pm2.score - pm1.score)
}

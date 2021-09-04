import { Colour, Deck, HexagoNumber, Rotation } from '../src'

describe('Deck tests', () => {

  describe('originalCards', () => {

    it('should be a total of 36 wedges with each colour', () => {
      let numRed = 0
      let numGreen = 0
      let numBlue = 0
      let numYellow = 0
      let numOrange = 0
      let numPurple = 0
      for (const card of Deck.originalCards) {
        for (const wedgeIndex of [0, 1, 2, 3, 4, 5]) {
          const wedge = card.wedgeAt(wedgeIndex, Rotation.Rotation0)
          switch (wedge.colour) {
            case Colour.Red: numRed++; break
            case Colour.Green: numGreen++; break
            case Colour.Blue: numBlue++; break
            case Colour.Yellow: numYellow++; break
            case Colour.Orange: numOrange++; break
            case Colour.Purple: numPurple++; break
          }
        }
      }
      expect(numRed).toBe(36)
      expect(numGreen).toBe(36)
      expect(numBlue).toBe(36)
      expect(numYellow).toBe(36)
      expect(numOrange).toBe(36)
      expect(numPurple).toBe(36)
    })

    it('should be a total of 36 wedges with each number', () => {
      let numOne = 0
      let numTwo = 0
      let numThree = 0
      let numFour = 0
      let numFive = 0
      let numSix = 0
      for (const card of Deck.originalCards) {
        for (const wedgeIndex of [0, 1, 2, 3, 4, 5]) {
          const wedge = card.wedgeAt(wedgeIndex, Rotation.Rotation0)
          switch (wedge.number) {
            case HexagoNumber.Number1: numOne++; break
            case HexagoNumber.Number2: numTwo++; break
            case HexagoNumber.Number3: numThree++; break
            case HexagoNumber.Number4: numFour++; break
            case HexagoNumber.Number5: numFive++; break
            case HexagoNumber.Number6: numSix++; break
          }
        }
      }
      expect(numOne).toBe(36)
      expect(numTwo).toBe(36)
      expect(numThree).toBe(36)
      expect(numFour).toBe(36)
      expect(numFive).toBe(36)
      expect(numSix).toBe(36)
    })

    it('every card has one repeated colour', () => {
      for (const card of Deck.originalCards) {
        const colours = new Set<Colour>()
        for (const wedgeIndex of [0, 1, 2, 3, 4, 5]) {
          const wedge = card.wedgeAt(wedgeIndex, Rotation.Rotation0)
          colours.add(wedge.colour)
        }
        expect(colours.size).toBe(5)
      }
    })

    it('every card has one repeated number', () => {
      for (const card of Deck.originalCards) {
        const numbers = new Set<HexagoNumber>()
        for (const wedgeIndex of [0, 1, 2, 3, 4, 5]) {
          const wedge = card.wedgeAt(wedgeIndex, Rotation.Rotation0)
          numbers.add(wedge.number)
        }
        expect(numbers.size).toBe(5)
      }
    })

    it('every card has a 1 and a 6', () => {
      for (const card of Deck.originalCards) {
        let hasOne = false
        let hasSix = false
        for (const wedgeIndex of [0, 1, 2, 3, 4, 5]) {
          const wedge = card.wedgeAt(wedgeIndex, Rotation.Rotation0)
          if (wedge.number == 1) hasOne = true
          if (wedge.number == 6) hasSix = true
        }
        expect(hasOne).toBe(true)
        expect(hasSix).toBe(true)
      }
    })
  })
})

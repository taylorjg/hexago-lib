export enum Colour {
  Red,
  Green,
  Blue,
  Yellow,
  Orange,
  Purple
}

export enum HexagoNumber {
  Number1 = 1,
  Number2 = 2,
  Number3 = 3,
  Number4 = 4,
  Number5 = 5,
  Number6 = 6
}

export enum Rotation {
  Rotation0 = 0,
  Rotation60 = 1,
  Rotation120 = 2,
  Rotation180 = 3,
  Rotation240 = 4,
  Rotation300 = 5
}

export const allRotations = [
  Rotation.Rotation0,
  Rotation.Rotation60,
  Rotation.Rotation120,
  Rotation.Rotation180,
  Rotation.Rotation240,
  Rotation.Rotation300
]

export const rotationRotateCW = (rotation: Rotation): Rotation => {
  switch (rotation) {
    case Rotation.Rotation0: return Rotation.Rotation60
    case Rotation.Rotation60: return Rotation.Rotation120
    case Rotation.Rotation120: return Rotation.Rotation180
    case Rotation.Rotation180: return Rotation.Rotation240
    case Rotation.Rotation240: return Rotation.Rotation300
    case Rotation.Rotation300: return Rotation.Rotation0
  }
}

export const rotationRotateCCW = (rotation: Rotation): Rotation => {
  switch (rotation) {
    case Rotation.Rotation0: return Rotation.Rotation300
    case Rotation.Rotation60: return Rotation.Rotation0
    case Rotation.Rotation120: return Rotation.Rotation60
    case Rotation.Rotation180: return Rotation.Rotation120
    case Rotation.Rotation240: return Rotation.Rotation180
    case Rotation.Rotation300: return Rotation.Rotation240
  }
}

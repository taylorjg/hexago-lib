export class Cell {

  public constructor(
    public readonly row: number,
    public readonly col: number) {
  }

  public equals(other: Cell) {
    return this.row == other.row && this.col == other.col
  }
}

export const SELECT_CELL = 'SELECT_CELL'

export function selectCell(currentPlayer, row, col, position) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col,
    position
  }
}

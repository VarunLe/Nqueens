export default function getAnimations(board) {
  const boardSize = board.length;
  const animations = [];
  solve(animations, board, 0, boardSize);
  return animations;
}

function isValid(row, col, board) {
  let i = row,
    j = col;
  console.log(board[i][j]);
  while (j >= 0) {
    if (board[i][j].isQueen) return false;
    j--;
  }
  j = col;
  while (i >= 0 && j >= 0) {
    if (board[i][j].isQueen) return false;
    i--;
    j--;
  }
  i = row;
  j = col;
  while (i < board.length && j >= 0) {
    if (board[i][j].isQueen) return false;
    i++;
    j--;
  }
  return true;
}

function solve(animations, board, col, boardSize) {
  if (col === boardSize) return true;
  for (let row = 0; row < boardSize; row++) {
    animations.push({ row: row, col: col, pos: true });
    if (isValid(row, col, board)) {
      board[row][col].isQueen = true;
      if (solve(animations, board, col + 1, boardSize)) return true;
      animations.push({ row: row, col: col, pos: false });
      board[row][col].isQueen = false;
    } else animations.push({ row: row, col: col, pos: false });
  }
  return false;
}

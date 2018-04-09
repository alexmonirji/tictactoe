const printBoard = (board) => {
  let result = '';
  board.forEach((row) => {
    row.forEach((col) => result += col);
    result += '\n';
  });
  return result;
};
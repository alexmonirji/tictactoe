const printBoard = (board) => {
  let result = '';
  board.forEach((row) => {
    row.forEach((col) => result += col);
    result += '\n';
  });
  return result;
};

const rotateBoard = (board) => {
  let rotated = [];
  for (let i = board.length - 1; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < board.length; j++) {
      row.push(board[i][j]);
    }
    rotated.push(row);
  }
  return rotated;
};

const checkWinner = (board) => {
  for (let i = 0; i < 3; i++) {
    if (board[i].every((col) => col === 'X')) {
      return 'X';
    } else if (board[i].every((col) => col === 'O')) {
      return 'O';
    }
    let soFar = true;
    for (let j = 0; j < 3 && soFar; j++) {
      if (board[j][i] !== 'X') {
        soFar = false;
      }
    }
    if (soFar) {
      return 'X';
    }
    soFar = true;
    for (let j = 0; j < 3 && soFar; j++) {
      if (board[j][i] !== 'O') {
        soFar = false;
      }
    }
    if (soFar) {
      return 'O';
    }
  }
  soFar = true;
  for (let i = 0, j = 0; i < 3 && soFar; i++, j++) {
    if (board[i][j] !== 'X') {
      soFar = false;
    }
  }
  if (soFar) {
    return 'X';
  }
  soFar = true;
  for (let i = 0, j = 0; i < 3 && soFar; i++, j++) {
    if (board[i][j] !== 'O') {
      soFar = false;
    }
  }
  if (soFar) {
    return 'O';
  }
  soFar = true;
  for (let i = 2, j = 0; i >= 0 && soFar; i--, j++) {
    if (board[i][j] !== 'X') {
      soFar = false;
    }
  }
  if (soFar) {
    return 'X';
  }
  soFar = true;
  for (let i = 2, j = 0; i >= 0 && soFar; i--, j++) {
    if (board[i][j] !== 'O') {
      soFar = false;
    }
  }
  if (soFar) {
    return 'O';
  }
};

const board = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];


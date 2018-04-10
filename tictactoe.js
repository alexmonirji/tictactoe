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

  return null;
};

const board = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];

let winner;
let input = [];

for (let i = 0; i < 9; i++) {
  let player;

  if (i % 2 === 0) {
    player = 'X';
  } else {
    player = 'O';
  }
  
  console.log('Player:', player);
  console.log(printBoard(board));
  
  let isBlocked = false;
  
  do {
    do {
      input[0] = window.prompt('Enter row:');
    } while (input[0] !== 0 || input[0] !== 1 || input[0] !== 2);
    
    do {
      input[1] = window.prompt('Enter col:');
    } while (input[1] !== 0 || input[1] !== 1 || input[1] !== 2);
    
    if (board[input[0]][input[1]] !== '.') {
      isBlocked = true;
    }
  } while (!isBlocked);

  board[input[0]][input[1]] = player;
  let winner = checkWinner(board);
  
  if (winner) {
    console.log('Winner:', winner);
    break;
  }

  rotateBoard(board);
}

console.log('Draw!');
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // cols
  [1, 5, 9], [3, 5, 7] // diags
];
const WINS_REQUIRED = 5;
const SQUARE_FIVE = '5';
const FIRST_PLAYER = 'choose';

let prompt = (string) => console.log(`=> ${string}`);

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = findAtRiskSquare(board, COMPUTER_MARKER) ||
                findAtRiskSquare(board, HUMAN_MARKER) ||
                ifSquareFiveEmpty(board) ||
                emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(board, player) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    let threeSquares = [board[sq1], board[sq2], board[sq3]];

    if (threeSquares.filter(occupied => occupied === player).length === 2 &&
    threeSquares.filter(empty => empty === INITIAL_MARKER).length === 1) {
      let square = WINNING_LINES[line][threeSquares.indexOf(INITIAL_MARKER)];
      return square;
    }
  }

  return null;
}

function ifSquareFiveEmpty(board) {
  return emptySquares(board).includes(SQUARE_FIVE) ? SQUARE_FIVE : null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(array, sep = ', ', endSep = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return array[0];
    case 2:
      return `${array[0]} ${endSep} ${array[1]}`;
    default:
      return `${array.join(sep).slice(0, -1)}${endSep} ${array.slice(-1)}`;
  }
}

function initializeScore() {
  let score = {
    player: 0,
    computer: 0,
  };

  return score;
}

function displayScore(scores) {
  prompt(`Player: ${scores.player} Computer: ${scores.computer}`);
}

function updateScore(scores, winner) {
  scores[winner] += 1;
}

function determineFirstMove() {
  if (FIRST_PLAYER === 'choose') {
    prompt("Please indicate who will make first move: 'player' or 'computer'");
    let firstMove;

    while (true) {
      firstMove = readline.question();
      if (['player', 'computer' , 'p', 'c'].includes(firstMove.toLowerCase())) break;
      prompt("Sorry that's an invalid choice");
    }
    return firstMove === 'player' || firstMove === 'p' ? HUMAN_MARKER : COMPUTER_MARKER;
  }

  return FIRST_PLAYER === 'player' ? HUMAN_MARKER : COMPUTER_MARKER;
}

function chooseSquare(board, player) {
  if (player === HUMAN_MARKER) {
    return playerChoosesSquare(board);
  } else {
    return computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  return player === HUMAN_MARKER ? COMPUTER_MARKER : HUMAN_MARKER;
}

function repeatGame() {
  let answer;

  while (true) {
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (['y', 'n'].includes(answer)) break;
  }

  return answer === 'y';
}

while (true) {
  let score = initializeScore();
  let currentPlayer = determineFirstMove();
  let storeFirstPlayer = currentPlayer;

  while (true) {
    let board = initializeBoard();
    currentPlayer = storeFirstPlayer;

    while (true) {
      displayBoard(board);
      displayScore(score);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      updateScore(score, detectWinner(board).toLowerCase());
      if (score.player === WINS_REQUIRED ||
         score.computer === WINS_REQUIRED) {
        displayScore(score);
        break;
      }
    } else {
      prompt("It's a tie!");
    }

    readline.question('Press any key to continue\n');
  }

  if (!repeatGame()) break;
}

prompt('Thanks for playing Tic-Tac-Toe!');

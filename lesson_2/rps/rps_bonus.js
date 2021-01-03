const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const SHORTENED_VALID_CHOICES = VALID_CHOICES.map((element) => element[0]);
const WINNING_COMBOS = {
  rock : ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors : ['paper', 'lizard'],
  lizard : ['paper', 'spock'],
  Spock : ['rock', 'scissors']
};
const WINNING_SCORE = 5;
const DISPLAY_CHOICES = VALID_CHOICES.map((element, index) => {
  return `(${SHORTENED_VALID_CHOICES[index]})${element.substring(1)}`;
});

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function findWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return 'You';
  } else if (choice === computerChoice) {
    return 'Tie';
  } else {
    return 'Computer';
  }
}

function displayWinner(winner) {
  switch (winner) {
    case 'You':
      prompt('You win!');
      break;
    case 'Computer':
      prompt('Computer wins!');
      break;
    case 'Tie':
      prompt("It's a tie!");
      break;
  }
}

function findGrandWinner(playerScore, computerScore) {
  return ((playerScore > computerScore) ? 'You' : 'Computer');
}

function updateScore(score, winner) {
  if (winner === 'You') {
    score.player += 1;
  } else if (winner === 'Computer') {
    score.computer += 1;
  }
}

function repeatGame() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer === 'y';
}

while (true) {
  console.clear();
  let score = {player: 0, computer: 0};

  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt('First to five wins!');
  while (score.player < WINNING_SCORE && score.computer < WINNING_SCORE) {
    prompt(`Choose one: ${DISPLAY_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice) &&
           !SHORTENED_VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    if (SHORTENED_VALID_CHOICES.includes(choice)) {
      choice = VALID_CHOICES[SHORTENED_VALID_CHOICES.indexOf(choice)];
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    let winner = findWinner(choice, computerChoice);
    displayWinner(winner);
    updateScore(score, winner);

    console.log('');
    prompt(`Score: You: ${score.player}, Computer: ${score.computer}`);
    console.log('-------------------------------------------------------------');
  }

  let grandWinner = findGrandWinner(score.player, score.computer);
  prompt(`Grand Winner: ${grandWinner}`);

  if (!repeatGame()) break;
}
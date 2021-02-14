let readline = require('readline-sync');

const ROUNDS_TO_WIN = 5;
const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const DEALER_VALUE_LIMIT = 17;
const WIN_VALUE_LIMIT = 21;

function initializeCards() {
  let deck = [];

  for (let value in VALUES) {
    for (let suit in SUITS) {
      deck.push([VALUES[value], SUITS[suit]]);
    }
  }

  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealInitialCards(deck) {
  let twoCards = [];

  for (let card = 0; card < 2; card += 1) {
    twoCards.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
  }

  return twoCards;
}

function drawCard(hand, deck) {
  return hand.push(
    deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}

function calculateHand(hand) {
  let handValue = valueOfHand(hand);
  let total = 0;

  handValue.forEach(card => {
    if (['Jack', 'Queen', 'King'].includes(card)) {
      total += 10;
    } else if (card === 'Ace') {
      total += 11;
    } else {
      total += Number(card);
    }
  });

  handValue.filter(card => card === 'Ace').forEach(_ => {
    if (total > WIN_VALUE_LIMIT) {
      total -= 10;
    }
  });

  return total;
}

function busted(handTotal) {
  return handTotal > WIN_VALUE_LIMIT;
}

function valueOfHand(hand) {
  return hand.map(card => card[0]);
}

function playAgain() {
  let repeat;

  while (!['y', 'n'].includes(repeat)) {
    repeat = readline.question('Would you like to play again? (y/n)\n').toLowerCase();
  }

  return repeat === 'y';
}

function displaySuit(array) {
  return array.map(item => {
    return `${item[0]} of ${item[1]}`;
  });
}

function displayCommas(array) {
  array = displaySuit(array);

  switch (array.length) {
    case 2:
      return array.join(' and ');
    default:
      return `${array.slice(0, -1).join(', ')}, and ${array.slice(-1)}`;
  }
}

function validateStay() {
  let answer;

  while (true) {
    console.log('(h)it or (s)tay?');
    answer = readline.question().toLowerCase();
    if (['stay', 's', 'hit', 'h'].includes(answer)) break;
  }
  return ['s', 'stay'].includes(answer);
}

function displayFinalHand(dealerHand, playerHand) {
  console.log(`Dealer's final hand: ${displayCommas(dealerHand)}.`);
  console.log(`Hand value: ${calculateHand(dealerHand)}`);
  console.log(`Your final hand: ${displayCommas(playerHand)}.`);
  console.log(`Hand value: ${calculateHand(playerHand)}\n`);
}

function initializeScore() {
  return {
    player: 0,
    dealer: 0
  };
}

function displayScore(score) {
  console.log(`You: ${score.player} Dealer: ${score.dealer}`);
}

function displayWinner(score) {
  let winner = Object.keys(score).reduce((a, b) =>
    (score[a] > score[b] ? a : b));

  return winner[0].toUpperCase() + winner.slice(1);
}

while (true) {
  let score = initializeScore();

  while (true) {
    let deck = initializeCards();
    shuffle(deck);
    let dealerHand = valueOfHand(dealInitialCards(deck));
    let playerHand = valueOfHand(dealInitialCards(deck));
    let dealerTotal = calculateHand(dealerHand);
    let playerTotal = calculateHand(playerHand);

    console.clear();
    console.log('Welcome to Whatever-One!');
    console.log('First to five wins.');
    console.log(`You: ${score.player} Dealer: ${score.dealer}`);
    console.log('----------------------');
    console.log(`Dealer's hand: ${displaySuit(dealerHand)[0]} and unknown card\n`);
    console.log(`Your hand: ${displayCommas(playerHand)}`);
    console.log(`Your hand value: ${playerTotal}\n`);

    while (true) {
      if (validateStay()) break;

      drawCard(playerHand, deck);
      playerTotal = calculateHand(playerHand);
      console.log(`\nYou Drew: ${displaySuit(playerHand)[playerHand.length - 1]}`);
      console.log(`Your hand: ${displayCommas(playerHand)}`);
      console.log(`Your hand value: ${playerTotal}\n`);

      if (busted(playerTotal)) {
        console.log('You busted!\n');
        displayFinalHand(dealerHand, playerHand);
        console.log('Dealer wins the round!');
        score.dealer += 1;
        break;
      }
    }
    console.log();

    while (!busted(playerTotal)) {
      console.log(`Dealer's hand: ${displayCommas(dealerHand)}`);
      console.log(`Dealer's hand value: ${dealerTotal}\n`);

      if (busted(dealerTotal)) {
        console.log('Dealer busted!\n');
        displayFinalHand(dealerHand, playerHand);
        console.log('You win the round!\n');
        score.player += 1;
        break;
      }
      if (dealerTotal >= DEALER_VALUE_LIMIT) {
        console.log('Dealer stays.\n');
        break;
      }
      if (dealerTotal < DEALER_VALUE_LIMIT) {
        console.log('Dealer hits.');
        drawCard(dealerHand, deck);
        dealerTotal = calculateHand(dealerHand);
        console.log(`\nDealer Drew: ${displaySuit(dealerHand)[dealerHand.length - 1]}`);
      }
    }

    if (!busted(dealerTotal) && !busted(playerTotal)) {
      if (dealerTotal < playerTotal) {
        console.log('You win the round!\n');
        score.player += 1;
      } else if (playerTotal === dealerTotal) {
        console.log("It's a tie.\n");
      } else {
        console.log('Dealer wins the round!\n');
        score.dealer += 1;
      }
      displayFinalHand(dealerHand, playerHand);
    }
    readline.question('Press enter to continue\n');

    if (Object.values(score).includes(ROUNDS_TO_WIN)) break;
  }
  console.log('----Final Score----');
  displayScore(score);
  console.log(`${displayWinner(score)} wins the match!\n`);
  if (!playAgain()) break;
}

// WAR card game
/*
-Classes for card, deck, player and their properties/methods
-no need for user input, will run in browser's console without user input
-Must do the following:
    -deal 26 cards to each player from 52 card deck
    -interate through turns where each player plays a card
        -the player who played the higher card is awarded a point
        -and ties result in 0 points for both players
    -after all cards have been played, display the score and declare the winner
    -write unit test using mocha and chai for at least one of the functions
*/

//--------------------------------------------------------------------------------

// Arrays for creating deck
const cardSuits = ["hearts", "diamonds", "spades", "clubs"];
const cardRanks = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

//--------------------------------------------------------------------------------

// Class for deck of cards, includes function for shuffling the deck
class Deck {
  constructor() {
    this.deck = [];

    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 0; j < cardRanks.length; j++) {
        this.deck.push({
          value: j + 1,
          suit: cardSuits[i],
          rank: cardRanks[j],
        });
      }
    }
    const shuffleIt = () => {
      this.deck.sort(() => 0.5 - Math.random());
    };
    shuffleIt(this.deck);
  }
}

let newDeck = new Deck();
console.log("The deck has been shuffled and is ready to deal to players.");
console.log(newDeck.deck);

//--------------------------------------------------------------------------------

// Class for player to include their name and score
class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.playerScore = 0;
  }
}

const playerOne = new Player("Brittni");
const playerTwo = new Player("Mike");

//--------------------------------------------------------------------------------

// Empty arrays to store player hands
let playerOneHand = [];
let playerTwoHand = [];

//--------------------------------------------------------------------------------

// Function to deal shuffled cards to player hands
const dealCards = (arr) => {
  let half = Math.ceil(arr.length / 2);
  playerOneHand = arr.slice(0, half);
  playerTwoHand = arr.slice(half);
  console.log(`${playerOne.playerName}'s hand: `);
  console.log(playerOneHand);
  console.log(`${playerTwo.playerName}'s hand: `);
  console.log(playerTwoHand);
};
dealCards(newDeck.deck);

console.log("Players now have their decks.");

//--------------------------------------------------------------------------------

// Function to start game and play through cards

console.log("Time to play!");

const playGame = () => {
  for (let i = 0; i < 26; i++) {
    console.log(
      `${playerOne.playerName}'s card is: ${playerOneHand[i].rank} of ${playerOneHand[i].suit}`
    );
    console.log(
      `${playerTwo.playerName}'s card is: ${playerTwoHand[i].rank} of ${playerTwoHand[i].suit}`
    );
    if (playerOneHand[i].value > playerTwoHand[i].value) {
      console.log(`${playerOne.playerName} gets a point!`);
      playerOne.playerScore += 1;
    } else if (playerTwoHand[i].value > playerOneHand[i].value) {
      console.log(`${playerTwo.playerName} gets a point!`);
      playerTwo.playerScore += 1;
    } else if (playerTwoHand[i].value === playerOneHand[i].value) {
      console.log("Tie! No points awarded.");
    }
  }
};

playGame();

//--------------------------------------------------------------------------------

// Function to determine winner

console.log(`The final scores are as follows: 
> ${playerOne.playerName}'s score: ${playerOne.playerScore}
> ${playerTwo.playerName}'s score: ${playerTwo.playerScore}
`);

console.log("And the winner is...");

const determineWinner = () => {
  if (playerOne.playerScore > playerTwo.playerScore) {
    console.log(playerOne.playerName);
  } else if (playerTwo.playerScore > playerOne.playerScore) {
    console.log(playerTwo.playerName);
  } else {
    console.log("Tie game!");
  }
};

determineWinner();

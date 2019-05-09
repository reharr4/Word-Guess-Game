// Global Variables
// =========================================================================

var villainArray = ["Him", "Mojo Jojo", "Fuzzy Lumpkins", "Princess Morbucks", "The Ganggreen Gang", "The Amoeba Boys", "Sedusa", "The Rowdyruff Boys"];

// score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemaining = 20;
var guessedLetters = [];
var letterToGuess = null;

// https://www.kirupa.com/html5/picking_random_item_from_array.htm
var randomWord = villainArray[Math.floor(Math.random() * villainArray.length)];
console.log("random word", randomWord);

// letter choices
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// guesses remaining
var updateGuessesRemaining = function() {
  document.querySelector('#guessRemaining').innerHTML = "Guesses Remaining: " + updateGuessesRemaining;
};

// letter to guess
var updateletterToGuess = function(){
  this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
  document.querySelector('#let').innerHTML = "Guesses so far: " + guessedLetters.join(', ');
};

// wordLength = x
var wordLength = randomWord.length;

// guesses 20
var totalGuesses = guessed(wordLength);

// guessedLetters = ["x", "y", "z"]
var guessedLetters = [];

// randomWordLetters = ["M", "o", "j", "o", "J", "o", "j", "o"]
var randomWordLetters = [];

// playerGuess = "x"
var playerGuess;

// reset
var reset = function(){
  totalGuesses = 20;
  guessesRemaining = 20;
  guessedLetters = [];

  updateplayerGuess();
  updateguessedLetters();
  updateGuessesRemaining();

};

updateGuessesRemaining();
updateplayerGuess();

// Functions
// ==============================================================
function guessed(x, y) {
    return x + y;
}

function wrongGuess() {
  guessedLetters.push(playerGuess);
  document.getElementById("letters guessed") = guessedLetters();
  guessed--;
  console.log("wrong guess", guessed);
}

function correctGuess(indexes) {
  document.getElementById(villainArray);
  guessed--;
  console.log("correct guess", guessed);
}


// player input
document.onkeyup = function(event) {
  var playerGuess;
  guessesRemaining--;
  console.log(playerGuess)

  guessedLetters.push(playerGuess);
  updateGuessesRemaining();
  updateguessedLetters();

    if (guessesRemaining > 0) {
      if (playerGuess === letterToGuess){
          wins++;
          document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
          alert("Powerpuffs Save the Day!");
          reset();
        } 
    }else if (guessesRemaining === 0) {
          losses++;
          document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
          alert("The City of Townsville is under attack!");
          reset();
    }
  // else if (searched) {
  //  / console.log
  // }
  // else {
    // console.log("Not a match.");
    // wrongGuess();
  // }

  // if (arraysEqual(blankSpaces, randomWordLetters)) {
    
  // }
  // else if (arraysEqual(blankSpaces, randomWordLetters)) {
  // }

}
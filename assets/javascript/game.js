// Global Variables
// =========================================================================

var villainArray = ["Him", "Mojo Jojo", "Fuzzy Lumpkins", "Princess Morbucks", "The Ganggreen Gang", "The Amoeba Boys", "Sedusa", "The Rowdyruff Boys"];

// https://www.kirupa.com/html5/picking_random_item_from_array.htm
var randomWord = villainArray[Math.floor(Math.random() * villainArray.length)];
console.log("random word", randomWord);

// wordLength = x
var wordLength = randomWord.length;

// guesses 20
var guessed = guessed(wordLength);

// guessedLetters = ["x", "y", "z"]
var guessedLetters = [];

// randomWordLetters = ["M", "o", "j", "o", "J", "o", "j", "o"]
var randomWordLetters = [];

// userGuess = "x"
var userGuess;

// Functions
// ==============================================================
function guess(x, y) {
    return x + y;
}

function wrong() {

}

document.onkeyup = function(event) {
  var him = event.key.toLowerCase();
  if (letter === ) {
    
  }
}
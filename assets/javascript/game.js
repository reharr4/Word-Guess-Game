// Global Variables

var villainArray = ["Him", "Mojo Jojo", "Fuzzy Lumpkins", "Princess Morbucks", "The Ganggreen Gang", "The Amoeba Boys", "Sedusa", "The Rowdyruff Boys"];

// https://www.kirupa.com/html5/picking_random_item_from_array.htm
var randomValue = villainArray[Math.floor(Math.random() * villainArray.length)];
console.log("random word", randomValue);

var wordLength = randomValue.length;

// guesses 20
var guessed = guessed(wordLength)

// guessedLetters = ["x", "y", "z"]
var guessedLetters = [];

// userGuess = "x"
var userGuess;

// Functions

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
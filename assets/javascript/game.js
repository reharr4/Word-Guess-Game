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

// playerGuess = "x"
var playerGuess;

// Functions
// ==============================================================
function guessed(x, y) {
    return x + y;
}

function wrong() {
  guessedLetters.push(playerGuess);
  document.getElementById("letters guessed") = guessedLetters();
  console.log("wrong guess  ", guessed);
}

document.onkeyup = function(event) {
  var playerGuess = event.key.toLowerCase();
  
  if () {
    console.log("");
  } 
  else if (blank) {
    console.log("Guess again");
  }
  else if (searched); {
    console.log
  }
  else {
    console.log("Not a match");
    wrongGuess();
  };

  if (arraysEqual(blankSpaces, randomWordLetters)) {
    alert("Powerpuffs Save the Day!")
  }
  else if (arraysEqual(blankSpaces, randomWordLetters)) {
  }
  else if (guessed === 0) {
    alert("")
  }
}
// Global Variables
// =========================================================================
// Available choices
var villainArray = ["Him", 
  "Mojo Jojo", 
  "Fuzzy Lumpkins", 
  "Princess Morbucks", 
  "The Ganggreen Gang", 
  "The Amoeba Boys", 
  "Sedusa", 
  "The Rowdyruff Boys"
];

/*// letter choices
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
*/

// score
var wins = 0;
var losses = 0;
var guessesRemaining = 20;
var guessesSoFar = [];
var wordToGuess = villainArray;

// words to guess
var updatewordToGuess = function(){
  this.wordToGuess = this.villainArray[Math.floor(Math.random() * this.villainArray.length)];
  console.log("letters to guess", wordToGuess);
};

var updateguessesSoFar = function(){
  document.querySelector('#let').innerHTML = "Guesses so far: " + guessesSoFar.join(', ');
  console.log("guesses so far", guessesSoFar);
};

// computer chooses word
// https://www.kirupa.com/html5/picking_random_item_from_array.htm
var computerChoice = villainArray[Math.floor(Math.random() * villainArray.length)];
console.log("random word", computerChoice);

// answers
var answerArray = [];
for (var i = 0; i < villainArray.length; i++) {
  answerArray[i] = "_";
  console.log("answer");
}

/*var remainingLetters = villainArray.length;*/

// guesses remaining
var updateguessesRemaining = function() {
  document.querySelector('#guessesRemaining').innerHTML = "Guesses Remaining: " + guessesRemaining;
  console.log("guesses remaining", guessesRemaining);
};

// reset
var reset = function(){
  guessesRemaining = 20;
  guessesSoFar = [];

  updateguessesSoFar();
  updatewordToGuess();
  updateguessesRemaining();

};

updateguessesRemaining();
updateguessesSoFar();


// player input

// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
document.onkeyup = function(event) {
  guessesRemaining--;
  var playerGuess = event.key.toLowerCase();
  console.log(playerGuess);

  guessesSoFar.push(playerGuess);
  updateguessesRemaining();
  updateguessesSoFar();

    if (guessesRemaining > 0) {
        // answerArray.join(" ");
      if (playerGuess === wordToGuess){
          wins++;
          document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
          alert("Powerpuffs Save the Day!");
          console.log(wins);
          reset();
        } 
    } else if (guessesRemaining === 0) {
          losses++;
          document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
          alert("The City of Townsville is under attack!");
          console.log(losses);

          reset();
    }
};
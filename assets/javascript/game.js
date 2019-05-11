// Global Variables
// =========================================================================
// Available choices
/*var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];*/
var villainArray = ["Him", 
  "Mojo Jojo", 
  "Fuzzy Lumpkins", 
  "Princess Morbucks", 
  "The Ganggreen Gang", 
  "The Amoeba Boys", 
  "Sedusa", 
  "The Rowdyruff Boys"
];

// score
var wins = 0;
var losses = 0;
var guessesRemaining = 20;
var guessesSoFar = [];
var wordToGuess = villainArray;

// words to guess
var updatewordToGuess = function(){
  this.wordToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
  console.log("wordToGuess", wordToGuess);
};

var updateguessesSoFar = function(){
  document.querySelector('#guessesSoFar').innerHTML="Guesses so far: " + guessesSoFar.join(' , ');
  console.log("guessesSoFar", guessesSoFar);
};

// computer chooses word
// https://www.kirupa.com/html5/picking_random_item_from_array.htm
var computerChoice = villainArray[Math.floor(Math.random() * villainArray.length)];
console.log("computerChoice", computerChoice);


// guesses remaining
var updateguessesRemaining = function() {
  document.querySelector('#guessesRemaining').innerHTML="Guesses Remaining: " + guessesRemaining;
  console.log("guessesRemaining", guessesRemaining);
};

// reset
var reset = function(){
  guessesRemaining = 20;
  guessesSoFar = [];

  updateguessesSoFar();
  updatewordToGuess();
  updateguessesRemaining();

};


// player input

// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
document.onkeyup = function(event) {
  
  var playerGuess = event.key.toLowerCase();
    
  guessesSoFar.push(playerGuess);
  updateguessesRemaining();
  updateguessesSoFar();

  if (playerGuess == computerChoice) {
          wins++;
          document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
          alert("Powerpuffs Save the Day!");
          console.log("wins", wins);

          reset();
          
    } else if (guessesRemaining == 0) {
          losses++;
          document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
          alert("The City of Townsville is under attack!");
          console.log("losses", losses);

          reset();
    }
};
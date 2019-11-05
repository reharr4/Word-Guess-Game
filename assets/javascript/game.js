// window.onload = function () {
var wordGuessGame = {
// Object of all words that can be guessed and their picture
villains:{
  him:{
    picture: "him.jpg",
  },
  mojojojo:{
    picture: "mojojojo.jpg"
  },
  fuzzylumpkins:{
    picture: "fuzzylumpkins.png"
  },
  princessmorbucks:{
    picture: "princessmorbucks.jpg"
  },
  gangreengang:{
    picture: "ganggreengang.jpg"
  },
  amoebaboys:{
    picture: "ameobaboys.jpg"
  },
  sedusa:{
    picture: "sedusa.jpg"
  },
  rowdyruffboys:{
    picture: "rowdyruffboys.jpg"
  }
},

// variables that set initial state of game
wins: 0,
wordInPlay: null,
lettersOfWord: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null,

setupGame: function(){
  // pick a random word (villain)
  var objKeys = Object.keys(this.villains);
  this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

  // split chosen word into individual letters
  this.lettersOfWord = this.wordInPlay.split("");
  // set letters of word to be underscores
  this.rebuildWord();
  // set number of guesses user gets
  this.processUpdateTotalGuesses();
},

// update the page when a user guesses a letter
updatePage: function(letter){
  // if user has no guesses left, restart the game
  if (this.guessesLeft === 0){
    this.restartGame();
    //else
  } else {
    // check for incorrect guesses
    this.updateGuesses(letter);
    // check for correct guesses
    this.updateMatchedLetters(letter);
    // rebuid word with correctly guessed letters
    this.rebuildWord();
    // if user guesses word and letters are revealed, restart game
    if (this.updateWins()===true){
      this.restartGame();
    }
  }
},

// this functions dictates what happens when user makes an incorrect guess
updateGuesses: function(letter){
  // if letter is not in guessedLetters or lettersOfWord array
  if ((this.guessedLetters.indexOf(letter)=== -1) && (this.lettersOfWord.indexOf(letter)=== -1)){
    // add letter to guessedLetters array
    this.guessedLetters.push(letter);
    // decrease guesses by one
    this.guessesLeft--;

    // update guesses remaining and guessed letters
    document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
  }
},

// sets initial guesses user gets
processUpdateTotalGuesses: function(){
  // user will get more guesses the longer the word is
  this.totalGuesses = this.lettersOfWord.length + 5;
  this.guessesLeft = this.totalGuesses;

  // render guesses left
  document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
},

// what happens if user makes successful guess
updateMatchedLetters: function(letter){
  // loop through letters of answer
  for (var i = 0; i <this.lettersOfWord.length; i++){
    // if guessed letter is correct for first time
    if ((letter === this.lettersOfWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
      // push guessed letter to matchedLetters array
      this.matchedLetters.push(letter);
    }
  }
},

// build display of word currently being guessed
rebuildWord: function(){
  // start with an empty string
  var wordView = "";

  // loop through letters of current word to guess
  for (var i=0; i < this.lettersOfWord.length; i++) {
    // if current letter has been guessed, display
    if (this.matchedLetters.indexOf(this.lettersOfWord[i]) !== -1){
      wordView += this.lettersOfWord[i];
    }
    // if it hasn't been guessed, display "_"
    else {
      wordView += "&nbsp;_&nbsp;";
    }
  }
  // update page with new string
  document.querySelector("#current-word").innerHTML = wordView;
},

// restart game by resetting variables
restartGame: function() {
  document.querySelector("#guessed-letters").innerHTML = "";
  this.wordInPlay = null;
  this.lettersOfWord = [];
  this.matchedLetters = [];
  this.guessedLetters = [];
  this.guessesLeft = 0;
  this.totalGuesses = 0;
  this.letterGuessed = null;
  this.setupGame();
  this.rebuildWord();
},

// check to see if user has won
updateWins: function(){
  var win;

  // didn't guess the word? set win to false
if (this.matchedLetters.length === 0){
  win = false;
} else {
  win = true;
}

// if you haven't guessed al letters in word, set win to false
for (var i=0; i <this.lettersOfWord.length; i++){
  if (this.matchedLetters.indexOf(this.lettersOfWord[i])===-1){
    win=false;
  }
}

// if win is true
if (win){
  // increment wins
  this.wins = this.wins + 1;
  // update wins on page
  document.querySelector("#wins").innerHTML = this.wins;
  // update image of villain
  document.querySelector("#villain-div").innerHTML = "<img class='villain-image' src='../images/" +
  this.villains[this.wordInPlay].picture + "' alt='>";

  // return true to restart game in updatePage
  return true;
}
// if win is false, return false to updatePage function
return false;
}
};

// initialize game when page loads
wordGuessGame.setupGame();

// on key press
document.onkeyup = function(event){
  // verify if key was a letter
  if (event.keyCode >= 49 && event.keyCode <=90){
    // capture pressed key and make lowercase
    wordGuessGame.letterGuessed = event.key.toLowerCase();
    // pass guessed letter into updatePage to run game
    wordGuessGame.updatePage(wordGuessGame.letterGuessed);
  }
};
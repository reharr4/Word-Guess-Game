// window.onload = function () {
var wordGuessGame = {
// Object of all words that can be guessed and their picture
// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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
  ganggreengang:{
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
wins: 0;
wordinPlay: null,
lettersOfWord: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null,

setupGame: function(){
  // pick a random word (villian)
  var objKeys = Object.keys(this.villains);
  this.wordinPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

  // split chosen word into individual letters
  this.lettersOfWord = this.wordinPlay.split("");
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
  this.wordinPlay = null;
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

  // update villian on page
  document.querySelector("#villain").innerHTML = this.villains[this.wordinPlay];

  // update image of villain
  document.querySelector("#villain-div").innerHTML = "<img class='villain-image' src='../images/" +
  this.villains[this.wordinPlay].picture + " 'alt='" + "'>";

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

// index of questions
var questionIndex = 0;

function renderWord () {
  // if there are more questions, render the next
  if (questionIndex <= (villains.length - 1)){
    document.querySelector(#question).innerHTML = villains[questionIndex].villains;
  }
  // if there are no more questions, end game
  else {
    document.querySelector(#question).innerHTML = "The City of Townsville is under attack!";
    document.querySelector(#question).innerHTML = "Final Score: " + wins-losses + " out of " + villains.length;
  }
}
// // update score
function updateWins(){
  document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses(){
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
// // Get elements
// var showWins = document.getElementById("winsTotal");
// var showLosses = document.getElementById("lossesTotal");

// -------------------------------------------------
// call functions to start game
renderWord();
updateWins();
updateLosses();

// run the following function when user presses alpha key
document.onkeyup = function(event) {

  // if there are no more questions, stop function
  if (questionIndex === villains.length) {
    return;
  }

  // determine which key was pressed and set to playerGuess variable
  var playerGuess = event.key.toLowerCase();

  // only run if alpha key were pressed
  if (playerGuess ===/[^A-Za-z]/$){
    if (playerGuess === villains[questionIndex]){
      alert("Correct!");
      wins++;
      updateWins();
    }
    else {
      alert("Wrong!");
      losses++;
      updateLosses();
    }
    // increment questionIndex variable and call renderWord function
    questionIndex++;
    renderWord();
  }
};
// // words to guess
// var updatewordToGuess = function(){
//   this.wordToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
//   console.log("wordToGuess", wordToGuess);
// };

// var updateguessesSoFar = function(){
//   document.querySelector('#guessesSoFar').innerHTML="Guesses so far: " + guessesSoFar.join(' , ');
//   console.log("guessesSoFar", guessesSoFar);
// };

// Count without spaces: https://stackoverflow.com/questions/26389745/how-to-count-the-number-of-characters-without-spaces
    //  wordLength = [];
    //  var wordLength = villains.length;

/*var blankSpaces = [];
     for (i = 0; i < wordLength; i ++) {
        villains[i] = villains.charAt(i);
        villains[i] = "_";
     }
         villains.push(" _ ");
         if (villains[i] === " ") {
             blankSpaces.splice(i, 1, "&nbsp;");
             document.getElementById("villains").innerHTML = blankSpaces.join(" ");
         } else {
            document.getElementById("villains").innerHTML = blankSpaces.join(" ");
         }*/



// computer chooses word
// https://www.kirupa.com/html5/picking_random_item_from_array.htm
// var computerChoice = villains[Math.floor(Math.random() * villains.length)];
//  console.log("computerChoice", computerChoice);
// function choosewordToGuess() {
//   blankSpaces = [];
//   wordToGuess = villains[Math.floor(Math.random() * villains.length)].toLowerCase();

//   if (wordToGuess.search(" ")) {
//       console.log("This word has a space");
//       for (var x = 0; x < villains.length; x++) {
//           blankSpaces.push(" _ ");
//       }if (villains[x] === " ") {
//               blankSpaces.splice(x, 1, "&nbsp;");
//               document.getElementById("villains").innerHTML = blankSpaces.join(" ");
//           } else {
//               wordToGuessLetters.splice(x, 1, " _ ");
//           }
//       }
// }
//       console.log("wordToGuessLetters", wordToGuessLetters);
//       console.log("blank spaces", blankSpaces);

// guesses remaining
// var updateguessesRemaining = function() {
//   document.querySelector('#guessesRemaining').innerHTML="Guesses Remaining: " + guessesRemaining;
//   this.guessesRemaining = this.guessesRemaining - 1;
//   console.log("guessesRemaining", guessesRemaining);
// };

// reset
// var reset = function(){
//   guessesRemaining = 20;
//   guessesSoFar = [];

//   updateguessesSoFar();
//   updatewordToGuess();
//   updateguessesRemaining();

// };



// player input
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://stackoverflow.com/questions/18239430/cannot-set-property-innerhtml-of-null
// document.onkeyup = function(event) {
//   playerGuess = event.key.toLowerCase();
//   playerGuess = playerGuess.replace(, "");

//     guessesSoFar.push(playerGuess);
//     updateguessesRemaining();
//     updateguessesSoFar();
  
//   if (playerGuess == computerChoice) {
//           wins++;
//           document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
//           alert("Powerpuffs Save the Day!");
//           console.log("wins", wins);
//           reset();  
//     } else if (guessesRemaining === 0) {
//           losses++;
//           document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
//           alert("The City of Townsville is under attack!");
//           console.log("losses", losses);
//           reset();
//     }
// };
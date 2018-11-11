var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('picks-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

//create variables

var wordBank = ['horseshoe', 'cowboy', 'saddle','mustang', 'cattleman', 'steer', 'rancher','cowgirl', 'rodeo','horseman', 'sheriff', 'whiskey', 'chaps', 'country', 'bulls', 'revolver', 'ribeye','cowhand','bronco','hillbilly', 'bullfighter', 'longhorns'];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr= [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//new game

function newGame() {
    //Reset game info
    gameRunning = true;
    guessesLeft = 5;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

// pick a new word

pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//placeholders
for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === ' ') {
        pickedWordPlaceholderArr.push(' ');
    }
    else {
        pickedWordPlaceholderArr.push('_');
    }
    }
 

//write to DOM
$guessesLeft.textcontent = guessesLeft;
$placeholders.textContent = pickedWordPlaceholderArr.join('');
$guessedLetters.textContent = incorrectLetterBank;
}

//user letter guess
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) { 
        guessedLetterBank.push(letter);
   
    //check if guessed letter is in word
    for ( var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i].toLowerCase === letter.toLowerCase()) {
            pickedWordPlaceholderArr[i] = pickedWord[i];
        }
    }

    $placeholders.textcontent = pickedWordPlaceholderArr.joint('');
   
    }
    else {
        if (gameRunning ===false) {
            alert("Please click New Game to start");
        }
        else {
            alert("You've already picked that letter. Please try again.");
        }
    }
}
    


//game button
$newGameButton.addEventListener('click', newGame);

//onkeyup to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keycode >= 65 && event.keycode <= 90) {
        letterGuess(event.key);
    }
}



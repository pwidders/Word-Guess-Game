(function () {

// Reference DOM elements
var _gameButton= document.getElementById("game-button");

var _placeHolders= document.getElementById("placeholders");

var _pickedLetters= document.getElementById("picked-letters");

var _remainingPicks= document.getElementById("picks-left");

var _wins= document.getElementById("wins");

var _losses= document.getElementById('losses');

// Create variables
var wordchoices = ['horseshoe', 'cowboy', 'saddle','mustang', 'cattle', 'steer', 'ranch','cowgirl', 'rodeo','horseman', 'sheriff', 'whiskey', 'chaps', 'country', 'bulls', 'revolver'];
var wins= 0;
var losses= 0;
var picksLeft= 5;
var gameRunning= false;
var chosenWord= '';
var pickedLetterPlaceholder= [];
var usedLetters= [];
var wrongLetters= [];


// Function to reset for new game
function newGame() {
    //clear game info
    gamerunning= true;
    picksLeft= 5;
    pickedWordList= [];
    wrongLetters= []; 
    pickedLetterPlaceholder= []; 
}

// Add event listener for new game button
_gameButton.addEventListener('click', newGame);


// Function to pick a new word
//randomWord= wordchoices[Math.floor(Math.random() * wordchoices.length)]; 
var randNum = Math.floor(Math.random() * wordchoices.length);
var chosenWord = wordchoices[randNum];

console.log(chosenWord);

// For loop to create underscores
var answerArray = [];
for (var i = 0; i < chosenWord.length; i++) {
    answerArray[i] = "_";
    }

var remainingLetters = chosenWord.length;

console.log(answerArray)

}


//log all info to DOM
_remainingPicks.textContent = picksLeft;
_placeHolders.textContent = pickedLetterPlaceholder.join();
_pickedLetters.textContent = wrongLetters;


// Function to record users selection

// Check users answers

// Check win or lose

// Add event listener for new game button
_gameButton.addEventListener('click', newGame);

//Add onkeyup event to trigger letterGuess

}());
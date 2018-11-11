

// Reference to DOM elements
var _newGameButton= document.getElementById('game-button');

var _placeHolders= document.getElementById('placeholders');

var _pickedletters= document.getElementById('picked-letters');

var _remainingpicks= document.getElementById('picks-left');

var _wins= document.getElementById('wins');

var _losses= document.getElementById('losses');

// Create variables
var wordchoices = ['horseshoe', 'cowboy', 'saddle','mustang', 'cattleman', 'steer', 'rancher','cowgirl', 'rodeo','horseman', 'sheriff', 'whiskey', 'chaps', 'country', 'bulls', 'revolver', 'ribeye','cowhand','bronco','hillbilly', 'bullfighter', 'longhorns'];

var wins= 0;

var losses= 0;

var picksLeft= 5;

var gameRunning= false;

var chosenWord= '';

var pickedLetterPlaceholder= [];

var usedLetters= [];

var wrongLetters= [];

var underScores= [];

function newGame() {
    //clear game info
    gameRunning= true;
    picksLeft= 5;
    pickedWordList= [];
    wrongLetters= []; 
    pickedLetterPlaceholder= []; 
}

// Function to pick a new word 
chosenWord= wordchoices[Math.floor(Math.random() * wordchoices.length)];

console.log(chosenWord)

// For loop to create underscores
function generateUnderscore () {
    for(var i = 0; i < chosenWord.length; i++) {
        underScores.push('_');
    }
    return underScores;
    }
    
    
// Function to start game from button click 

_newGameButton.addEventListener('click', function() {
    console.log('I hear you')
    // Function to reset for new game
    function newGame() {
    //clear game info
    gameRunning= true;
    picksLeft= 5;
    pickedWordList= [];
    wrongLetters= []; 
    pickedLetterPlaceholder= []; 
    }
});




    

    
    
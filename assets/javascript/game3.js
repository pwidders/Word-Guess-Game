//document.addEventListener("DOMContentLoaded", function (event) {
//    console.log('Ready!')

    //Reference to DOM elements

    var _newGameButton = document.getElementById('new-game-button');
    var _placeholders = document.getElementById('placeholders');
    var _guessedLetters = document.getElementById('guessed-letters');
    var _guessesLeft = document.getElementById('picks-left');
    var _wins = document.getElementById('wins');
    var _losses = document.getElementById('losses');
    var _submitButton = document.getElementById('submit-button');
    var _usersLetterInput = document.getElementById('text-input');
    var _userKeyEntry = document.getElementsByTagName('body')[0];

    //create variables

    var wordBank = ['horseshoe', 'cowboy', 'saddle', 'mustang', 'cattleman', 'steer', 'rancher', 'cowgirl', 'rodeo', 'horseman', 'sheriff', 'whiskey', 'chaps', 'country', 'bulls', 'revolver', 'ribeye', 'cowhand', 'bronco', 'hillbilly', 'bullfighter', 'longhorns'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = '';
    var gameRunning = false;
    var pickedWord = '';
    var pickedWordPlaceholderArr = [];
    var guessedLetterBank = [];
    var incorrectLetterBank = [];

    //Event listener for start game
    _newGameButton.addEventListener('click', newGame);

    //new game
    function newGame() {
        //Reset game info
        guessesLeft = 5;
        guessedLetterBank = [];
        incorrectLetterBank = [];
        pickedWordPlaceholderArr = [];
        // pick random word from list
        pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // create underline placeholders for word
        makeTicks();
        _guessesLeft.textContent = guessesLeft;
        _placeholders.textContent = pickedWordPlaceholderArr.join('');
        console.log(pickedWord);
    }

    function makeTicks(){
    //placeholders "_" for random word to guess
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            pickedWordPlaceholderArr.push(' ');
        }
        else {
            pickedWordPlaceholderArr.push('_');
        }
    }};

    // write to DOM
    
    _guessesLeft.textContent = guessesLeft;
    //_guessedLetters.textContent = incorrectLetterBank;

    // Listen for user letter guess. If letter matches a character with chosenWord
    _submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('I hear you!');
    // If letter matches a character with chosenWord
     });

    _userKeyEntry.onkeypress = function (event) {
        console.log('event!!U@)!@', event)
        // Check users keypress against chosenWord
        if (pickedWord.includes(event.key)) {
            // Iterate through pickedWord to identify matching letter index     
            for (var i=0; i < pickedWord.length; i++) {
                if (pickedWord[i] === event.key) {
                    // i -> 0, 1, 2 ... 7
                    // pickedWord - cowgirl string
                    // pickedWord[i] -> 'c', 'o', ... 'l'
                    pickedWordPlaceholderArr[i] = pickedWord[i]
                }
            }
            _placeholders.textContent = pickedWordPlaceholderArr.join('');
        }
    }
    



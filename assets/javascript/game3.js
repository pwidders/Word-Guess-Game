document.addEventListener("DOMContentLoaded", function (event) {
    console.log('Ready!')

    //Reference to DOM elements

    var _newGameButton = document.getElementById('new-game-button');
    var _placeholders = document.getElementById('placeholders');
    var _guessedLetters = document.getElementById('guessed-letters');
    var _guessesLeft = document.getElementById('picks-left');
    var _wins = document.getElementById('wins');
    var _losses = document.getElementById('losses');

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
    }
    };

    //write to DOM
    _guessesLeft.textContent = guessesLeft;
    _guessedLetters.textContent = incorrectLetterBank;

    //user letter guess

    letterGuess()

    function letterGuess(letter) {
        if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
            guessedLetterBank.push(letter);
        }

        //check if guessed letter is in word
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
                _placeholders.textcontent = pickedWordPlaceholderArr.join('');
            }

            else {
                if (gameRunning === false) {
                    alert("Please click New Game to start");
                }
                else {
                    alert("You've already picked that letter. Please try again.");
                }
            }

            // Check incorrect letter
            function checkIncorrect(letter) {

            }

            //onkeyup to trigger letterGuess
            document.onkeyup = function (event) {
                if (event.keycode >= 65 && event.keycode <= 90) {
                    letterGuess(event.key);
                }

            }
        }
    }
});

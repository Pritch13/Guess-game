// Possible words to guess
var possibleWords = ['computer', 'truck', 'store', 'email', 'trade', 'birthday'];

// Randomly picks a word to guess
var randWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
console.log(randWord);

// Converts word into underscores
var answerArray = [];
for (var i = 0; i < randWord.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = randWord.length;

// Possible guesses
var userPossibleGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
             'v', 'w', 'x', 'y', 'z', ' '];

// Lives
var lives = 7;

// Wrong guesses
var wrongGuesses = [];

// Right gusses
var rightGuesses = [];

// Score
var score = 0;

// On key up
document.onkeyup = function (event) {

    var userGuess = event.key;

    var answerCorrect = false;

    if (userPossibleGuess.indexOf(userGuess) > -1) {           // Only registers key up if its a letter

        for (var i = 0; i < randWord.length; i++) {     // Converts correct guess into letter from underscore
            if (userGuess === randWord[i]) {
                answerArray[i] = userGuess;
                answerCorrect = true;
                rightGuesses.push(userGuess);
                score++;
            }
        }

        document.getElementById('section').innerHTML = answerArray;

        if (score === randWord.length) {
            document.getElementById('title').innerHTML = 'You Win!';    // If word guessed correctly you win and content hidden
            document.getElementById('guesses').style.display = "none";
            document.getElementById('livesLeft').style.display = "none";
            document.getElementById('section').innerHTML = 'Refresh the page to play again!';
        }

        if (lives < 2) {
            document.getElementById('title').innerHTML = 'Game over!';  // If lives hit 0, game over displayed and content hidden
            document.getElementById('guesses').style.display = "none";
            document.getElementById('livesLeft').style.display = "none";
            document.getElementById('section').innerHTML = 'Refresh the page to play again!';
        }


        if (answerCorrect === false && userGuess !== " ") { // If guess is wrong, lives go down 1
            lives--;
            wrongGuesses.push(userGuess);
        }

        // if (wrongGuesses.indexOf(userGuess) > -1) {
            
        // }

        
        document.getElementById('livesLeft').innerHTML = lives;
        document.getElementById('guesses').innerHTML = wrongGuesses;


    }
}



// if (wrong guess has already been picked) {
//  dont let them pick it 
// }



// if (userPossibleGuess.indexOf(userGuess) > -1) {
//     alert('works')
//  }




// Possible words to guess
var possibleWords = ['elephant', 'truck', 'digital', 'javascript', 'thoughtful', 'birthday'];

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
             'v', 'w', 'x', 'y', 'z'];

// Lives
var lives = 7;

// Wrong guesses
var wrongGuesses = [];

// On key up
document.onkeyup = function (event) {

    var userGuess = event.key;

    var answerCorrect = false;

    for (var i = 0; i < randWord.length; i++) {     // Converts correct guess into letter from underscore
        if (userGuess === randWord[i]) {
            answerArray[i] = userGuess;
            answerCorrect = true;
        }
    }

    if (answerCorrect === false && userGuess !== " ") { // If guess is wrong, lives go down 1
        lives--;
        wrongGuesses.push(userGuess);
    }

    if (lives === 0) {
        document.getElementById('title').innerHTML = 'Game over!';  // If lives hit 0, game over displayed
    }

    


    document.getElementById('section').innerHTML = answerArray;
    document.getElementById('livesLeft').innerHTML = lives;
    document.getElementById('guesses').innerHTML = wrongGuesses;
}


// if (no underscores are left) {
//     display 'you win'
// }


// if (wrong guess had already been picked) {
//  dont let them pick it again
// }

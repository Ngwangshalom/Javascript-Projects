const words = ["javascript", "programming", "hangman", "console", "coding"];
const word = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingGuesses = 6;
let displayWord = "_".repeat(word.length).split("");

function display() {
    console.log(`Word: ${displayWord.join(" ")}`);
    console.log(`Guesses left: ${remainingGuesses}`);
    console.log(`Guessed letters: ${guessedLetters.join(", ")}`);
}

while (remainingGuesses > 0 && displayWord.includes("_")) {
    display();
    const guess = prompt("Guess a letter:").toLowerCase();
    if (guessedLetters.includes(guess)) {
        console.log("You already guessed that letter.");
    } else if (word.includes(guess)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                displayWord[i] = guess;
            }
        }
    } else {
        remainingGuesses--;
    }
    guessedLetters.push(guess);
}

if (remainingGuesses > 0) {
    console.log(`Congratulations! You guessed the word: ${word}`);
} else {
    console.log(`Sorry, you lost. The word was: ${word}`);
}

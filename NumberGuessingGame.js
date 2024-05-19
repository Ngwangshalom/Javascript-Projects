const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const target = Math.floor(Math.random() * 100) + 1;
let guess = 0;

console.log("Guess a number between 1 and 100:");


function askGuess() {
    rl.question('Your guess: ', (answer) => {
        guess = parseInt(answer);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            askGuess();
        } else if (guess > target) {
            console.log("Too high! Try again.");
            askGuess();
        } else if (guess < target) {
            console.log("Too low! Try again.");
            askGuess();
        } else {
            console.log("Congratulations! You guessed it right.");
            rl.close();
        }
    });
}


askGuess();

const target = Math.floor(Math.random() * 100) + 1;
let guess = 0;

while (guess !== target) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    if (guess > target) {
        console.log("Too high! Try again.");
    } else if (guess < target) {
        console.log("Too low! Try again.");
    } else {
        console.log("Congratulations! You guessed it right.");
    }
}

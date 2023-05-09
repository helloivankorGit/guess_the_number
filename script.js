function guessTheNumber() {
    const numberToGuess = Math.floor(Math.random() * 100) + 1;
    let guesses = 0;
    let guess = parseInt(prompt("Guess a number between 1 and 100:"));

    while (guess !== numberToGuess) {
        if (guess > numberToGuess) {
            guess = parseInt(prompt("Too high! Guess again:"));
        } else {
            guess = parseInt(prompt("Too low! Guess again:"));
        }
        guesses++;
    }

    alert(`Congratulations! You guessed the number in ${guesses} guesses.`);
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', guessTheNumber);

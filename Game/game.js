document.addEventListener('DOMContentLoaded', () => {
    const hiddenWord = ['h', 'e', 'l', 'l', 'o']; // Example hidden word
    const boxes = document.querySelectorAll('.box'); // Select all box elements
    const guessInput = document.querySelector('.guess'); // Select the guess input element

    const submitButton = document.querySelector('.submit');
    let correctGuesses = 0; // Track the number of correct guesses

    submitButton.addEventListener('click', () => {
        const guess = guessInput.value.trim().toLowerCase(); // Get the trimmed and lowercased user guess

        if (guess.length !== hiddenWord.length) {
            alert("Please enter a 5-letter word.");
            return;
        }

        // Check if the guessed word matches the hidden word
        if (guess === hiddenWord.join('')) {
            // Iterate through each letter of the guess and reveal correct letters
            for (let i = 0; i < guess.length; i++) {
                boxes[i].textContent = guess[i];
                boxes[i].classList.remove('hidden');
            }
            alert("Congratulations! You guessed the word.");
            // Disable further input after correct guess
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else {
            // Increment correctGuesses if the guessed word contains correct letters
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === hiddenWord[i]) {
                    boxes[i].textContent = guess[i];
                    boxes[i].classList.remove('hidden');
                    correctGuesses++;
                }
            }

            // Check if the user has reached the maximum number of attempts (6)
            if (correctGuesses >= 6) {
                alert("Sorry, you've used all your attempts. The hidden word was: " + hiddenWord.join(''));
                // Disable further input after maximum attempts
                guessInput.disabled = true;
                submitButton.disabled = true;
            }
        }

        // Clear the input field after processing the guess
        guessInput.value = '';
    });
});

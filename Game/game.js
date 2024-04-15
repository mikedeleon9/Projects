document.addEventListener('DOMContentLoaded', () => {
    const hiddenWord = ['h', 'e', 'l', 'l', 'o']; // Example hidden word
    const boxes = document.querySelectorAll('.box'); // Select all box elements
    const guessInput = document.querySelector('.guess'); // Select the guess input element
    const output = document.querySelector('.output');
    const resetButton = document.querySelector('.reset');
    const submitButton = document.querySelector('.submit');
    let correctGuesses = 0; // Track the number of correct guesses

    submitButton.addEventListener('click', () => {
        const guess = guessInput.value.trim().toLowerCase(); // Get the trimmed and lowercased user guess

        if (guess.length !== hiddenWord.length) {
            output.innerHTML = "Please enter a 5-letter word.";
            return;
        }

        let allCorrect = true;

        // Check if the guessed word matches the hidden word
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === hiddenWord[i]) {
                boxes[i].textContent = guess[i].toUpperCase();
                boxes[i].classList.remove('hidden', 'incorrect');
                boxes[i].classList.add('correct');
            } else {
                boxes[i].textContent = guess[i].toUpperCase();
                boxes[i].classList.remove('hidden', 'correct');
                boxes[i].classList.add('incorrect');
                allCorrect = false;
            }
        }

        if (allCorrect) {
            output.innerHTML = "Congratulations you guessed the word!";
            guessInput.disabled = true;
            submitButton.disabled = true;
            boxes.forEach(box => box.contentEditable = false);
        } else {
            output.innerHTML = "Some letters are incorrect. Try again.";
            correctGuesses++;
            if (correctGuesses >= 6) {
                alert("Sorry, you've used all your attempts. The hidden word was: " + hiddenWord.join(''));
                guessInput.disabled = true;
                submitButton.disabled = true;
            }
        }

        guessInput.value = '';
    });

    resetButton.addEventListener('click', () => {
        output.innerHTML = '';
        guessInput.disabled = false;
        submitButton.disabled = false;
        correctGuesses = 0;

        boxes.forEach(box => {
            box.textContent = '';
            box.classList.remove('correct', 'incorrect');
            box.classList.add('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenWord = ['h', 'e', 'l', 'l', 'o']; // Example hidden word
    const boxes = document.querySelectorAll('.box'); // Select all box elements
    const output = document.querySelector('.output');
    let currentIndex = 0;
    let remainingAttempts = 6;

    // Attach event listeners to each box
    boxes.forEach((box, index) => {
        box.addEventListener('input', (event) => {
            const currentBox = event.target;
            const nextBox = boxes[index + 1];

            if (nextBox && currentBox.textContent.length === 1) {
                nextBox.focus(); // Move focus to next box
            }
        });
    });

    // Add keypress event listener to each box
    boxes.forEach((box) => {
        box.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent default Enter key behavior (new line)
                submitGuess(); // Call function to handle guess submission
            }
        });
    });

    function submitGuess() {
        const guess = Array.from(boxes).map((box) => box.textContent.trim().toLowerCase()); // Get user guess as array of letters

        if (guess.length !== hiddenWord.length) {
            output.textContent = "Please enter a 5-letter word.";
            return;
        }

        let allCorrect = true;

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === hiddenWord[i]) {
                boxes[i].classList.add('correct');
                boxes[i].classList.remove('incorrect');
            } else {
                boxes[i].classList.add('incorrect');
                boxes[i].classList.remove('correct');
                allCorrect = false;
            }
        }

        if (allCorrect) {
            output.textContent = "Congratulations, you guessed the word!";
            output.classList.add('green-letter');
            output.classList.remove('red-letter');
            boxes.forEach((box) => (box.contentEditable = false)); // Disable editing after correct guess
        } else {
            output.textContent = "Some letters are incorrect. Try again.";
            output.classList.add('red-letter');
            remainingAttempts--;

            if (remainingAttempts === 0) {
                endGame(); // Call endGame function when no attempts left
            }
        }
    }

    // Reset functionality
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.textContent = '';
            box.classList.remove('incorrect', 'correct');
            box.contentEditable = true; // Re-enable editing
        });
        output.textContent = '';
        remainingAttempts = 6; // Reset remaining attempts
        boxes[currentIndex].focus(); // Set focus to the first box
    });

    function endGame() {
        output.textContent = `Sorry, you've used all your attempts. The hidden word was: ${hiddenWord.join('')}`;
        output.classList.add('red-letter');
        boxes.forEach((box) => (box.contentEditable = false)); // Disable editing after maximum attempts
    }
});

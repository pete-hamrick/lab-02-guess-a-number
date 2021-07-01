export function compareNumbers(reset, guessBtn, results, targetNumber, userGuessNum){
    if (targetNumber > userGuessNum) {
        results.textContent = 'Your guess is too high';

    } else if (targetNumber < userGuessNum) {
        results.textContent = 'Your guess is too low';

    } else {
        results.textContent = 'You Win! Game Over!';
        guessBtn.disabled = true;
        reset.style.visibility = 'visibility';
    }
}    
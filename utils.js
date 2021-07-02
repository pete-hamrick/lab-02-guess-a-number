export function compareNumbers(targetNum, userNum){

    let result = '';

    if (targetNum > userNum){
        result = 'too low';
    }
    else if (targetNum < userNum){

        result = 'too high';
    }
    else {
        result = 'correct';
    }

    return result;

}

//user trying to guess number, checking if user guessed correct or high or low
// compareNumbers, will compare user target number(int) against guess(int)

//if too high -> tell user guess too high
//if too low -> tell user too low
//if user guess equals target number -> user was correct

//spits out somthing (return) -> string



























/*export function compareNumbers(reset, guessBtn, results, targetNumber, userGuessNum){
    if (targetNumber > userGuessNum) {
        results.textContent = 'Your guess is too high';

    } else if (targetNumber < userGuessNum) {
        results.textContent = 'Your guess is too low';

    } else {
        results.textContent = 'You Win! Game Over!';
        guessBtn.disabled = true;
        reset.style.visibility = 'visibility';
    }
}   */ 
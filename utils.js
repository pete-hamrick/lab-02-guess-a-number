export function compareNumbers(targetNumber, userGuessNum){
    let result;
    // if guess is correct
    if (targetNumber === userGuessNum) {
        //      display YOU GOT IT
        result.textContent = 'You Win! Game Over!';
        //      disable game play

        // else if guess is too high
    } else if (targetNumber > userGuessNum) {

        //      display your guess is too high
        result.textContent = 'Your guess is too high';
        // else if guess is too low
    } else {
        result.textContent = 'Your guess is too low';
    }
    //      display your guess is too low
    //      
    //          
}

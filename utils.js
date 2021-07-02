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

export function genRandNum(){

    return Math.floor(Math.random() * 20) + 1;

}
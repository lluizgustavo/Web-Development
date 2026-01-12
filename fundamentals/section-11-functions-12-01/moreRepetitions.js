function moreRepetitions(array) {
    let more_repetitions = 0;
    let most_number_repeated = array[0];
    let cont = 0

    for (let num = 0; num < array.length; num += 1){
        cont = 0;
        for (let i = 0; i < array.length; i +=1){
            if (array[num] === array[i]){
                cont += 1
            }
        }
    if (cont > more_repetitions){
        more_repetitions = cont;
        most_number_repeated = array[num];
    }
    }
    return most_number_repeated
}

console.log(moreRepetitions([9, 3, 1, 5, 6, 1, 8, 1 , 7]))
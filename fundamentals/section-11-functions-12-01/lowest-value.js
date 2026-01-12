function lowestValue(array) {
   let lowest_number = 0
    for (let index = 1; index < array.length; index += 1){
        if (array[index] < array[lowest_number]){
            lowest_number = index
        }
    }
    return `The lowest number is on position ${lowest_number}` 
}


console.log(lowestValue([3,3,9,7,5]))
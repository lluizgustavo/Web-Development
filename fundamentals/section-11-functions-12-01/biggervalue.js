function biggerValue(array) {
    let biggest_number = 0
    for (let index = 1; index < array.length; index += 1){
        if (array[index] > array[biggest_number]){
            biggest_number = index
        }
    }
    return `The biggest number is on position ${biggest_number}`
}

console.log(biggerValue([2,4,5,1,9,9]))
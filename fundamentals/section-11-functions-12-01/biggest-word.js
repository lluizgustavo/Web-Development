function biggestWord(word) {
    let biggest_word = 0
    for (let index = 0; index < word.length; index += 1){
        if (word[index].length > word[biggest_word].length){
            biggest_word = index
        }
    }
    return `The biggest word in this array is: ${word[biggest_word]}`
}

console.log(biggestWord(['Maria', 'João', 'Alessandro']))
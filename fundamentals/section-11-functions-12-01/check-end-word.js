function checkEndWord (word1, word2) {
    let slice_word = word1.slice(-2)
    if (word2 === slice_word){
        return true
    }
    else{
        return false
    }
}

console.log(checkEndWord("Luiz", "iz"))
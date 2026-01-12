function checkPalindrome(word) {
    if (typeof word !== "string"){
        console.log("It must be strings here...")
        return 
    }
    split_word = word.split('')
    reverse_word = split_word.reverse()
    join_word = reverse_word.join('')
    console.log(
`Word received: ${word}
Word reversed: ${join_word}`)

if (word === join_word) {
    console.log (`${word} is a palindrome!`)
}
else {
    console.log(`${word} is not a palindrome`)
}
}

checkPalindrome("ovo")


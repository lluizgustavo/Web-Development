const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let cont = 0
let total_sum = 0
let total_division = total_sum / cont
let bigger_number = 0
let odd_numbers = 0

for (index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index])
    if (numbers[index] > bigger_number){
        bigger_number = numbers[index]
    }
}

for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 == 1){
        odd_numbers += 1
    }
}


console.log(`The sum is ${total_sum}`)

console.log(`The division is ${total_division}`)


if (total_division > 20) {
    console.log("The result is bigger than 20.")
}
else {
    console.los("The result is less or equals 20.")
}


console.log (`The biggest number on the list is ${bigger_number}.`)


if (odd_numbers > 0){
    console.log(`There are ${odd_numbers} odd numbers in this list.`)
}
else {
    console.log(`There are no odd numbers in this list.`)
}


for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
    total_sum += numbers[index]
    cont += 1
}






let number = 10
let result = ""
let multiplicaiton = 1;
console.log(`Factorial of ${number}:`)

for (let index = number; index > 0; index -=1 ){
    result += index + (index > 1 ? " x " : "")
    multiplicaiton *= index 

}

console.log(`${result} = ${multiplicaiton}`)

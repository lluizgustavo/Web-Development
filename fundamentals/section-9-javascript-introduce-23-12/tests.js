// const e let

// DIFFERENCE BETWEEN LET AND CONST
// CONST: something constant, normally used for numbers, used for something that 
// not change and not will change (with const, you must have to initizalized the variable);
// LET: 

let x = 7; // x = number (int) 
let name = "Luiz" // name = string literals
const num = 19; //  num = number
let person = true; // person = bool(true)
let no_datas; // no_datas = undefined 


// aritmetic operators (+, -, *, /, %)

let num1 = 5;
let num2 = 10;
let num3 = 15;

let sum = num1 + num2; //(15)
let subtraction = num1 - num2; //(-5)
let multiplication = num1 * num2; // (50)
let division = num1 / num2; // (0.5)

// ====================================================

// input and output datas 

// console.log("Hello, world!"); //console.log --> output
// console.log(sum)

// ====================================================

 
// condicional structures (if, else, switch case)

// if (sum == 15) {
//     console.log("It's true!")
// }

// else {
//     console.log("It's not true.")
// }


switch (sum) {
    case 5:
        console.log("It's equals 5")
        break
    case 10:
        console.log("It's equals 10.")
        break
    case 15:
        console.log("It's equals 15.")
        break
    case 20: 
        console.log("It's equals 20.")
        break
    default: 
        console.log("No one.")
        break
}


// logic operators (&&, ||)


let even1 = 2;
let even2 = 4;

if (even1 && even2 % 2 == 0) {
    console.log("It's even!");
}
else {
    console.log("It's not even.");
}
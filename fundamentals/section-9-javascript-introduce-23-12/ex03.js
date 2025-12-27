let num1 = 9;
let num2 = 9;
let num3 = 9;

if (num1 > num2 && num1 > num3) {
    console.log("The first number is biggest number.")
}

else if (num2 > num1 && num2 > num3) {
    console.log("The second number is the biggest number.")
}

else if (num3 > num1 && num3 > num2){
    console.log("The third number is the biggest number.")  
}

else if (num1 == num2 && num1 == num3 && num2 == num3 && num3 == num1){
    console.log("All of the numbers are equals.")
}

else {
    console.log("Invalid numbers.")
}
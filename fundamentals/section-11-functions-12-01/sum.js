function sumNumber(num) {
    let sum = 0;
    if (num < 0 ){
        return "ERROR! It must be bigger than zero "
    }
    for (let i = 0; i <= num; i +=1){
        sum += i
    }
    return sum
}

console.log(sumNumber(5))
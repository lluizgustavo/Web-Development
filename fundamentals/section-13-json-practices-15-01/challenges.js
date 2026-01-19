const girafa = true;
const elefante = true;
const macaco = false;
const cobra = false;


const compareTrue = (bool1, bool2) => {
    if (bool1 === true && bool2 === true)
        return true
    else{
        return false
    }
}


// console.log(compareTrue(girafa, elefante))



const splitSentence = (sentence) => {
    splitWord = sentence.split(' ')
    return splitWord
}

// console.log(splitSentence('foguete'))


const concatName = (sentence) => {
    lastIndex = sentence[sentence.length-1];
    firstIndex = sentence[0]
    newLIst = [lastIndex, firstIndex];
    return newLIst
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// console.log(concatName(['foguete', 'não', 'tem', 'ré']))
// console.log(concatName(['captain', 'my', 'captain']))


const footballPoints = (wins, ties) => {
    return wins * 3 + ties
}


// console.log(footballPoints(14, 8))
// console.log(footballPoints(1, 2))
// console.log(footballPoints(0, 0))


const highestCount = (array) => {
    let highestNumber = 0;
    let count = 0;
    for (let index = 0; index < array.length; index += 1){
        if (array[index] > highestNumber){
            highestNumber = array[index]
        }
    }
    for (let pass = 0; pass < array.length; pass += 1){
        if (array[pass] === highestNumber) {
            count += 1
        }
    }
    return count
}


// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// console.log(highestCount([0, 0, 0]))


const calcTriangleArea = (base, height) => {
    return (base * height) / 2
}

// console.log (calcTriangleArea(7, 3))

const calcRectangleArea = (base, height) => {
    return base * height
}

// console.log(calcRectangleArea(4, 5))

const calcAllareas = (base, height, form) => {
    let valueArea;
    if (form === "triangle") {        
        valueArea = calcTriangleArea(base, height)
        return `The value of the area of the triangle is: ${valueArea}`
    }
    else if (form === "rectangle") {
        valueArea = calcRectangleArea(base,height)
        return `The value of the area of the rectangle is: ${valueArea}`
    }
    else {
        return `It was not possible to make the calculation. Insert a valid geometric form.`
    }
}

// console.log(calcAllareas(3, 5, "rectangle"))
// console.log(calcAllareas(6, 7, "triangle"))
// console.log(calcAllareas(2, 2, "square"))

const catAndMouse = (mouse, cat1, cat2) => {
    cat1position = Math.abs(mouse - cat1);
    cat2position = Math.abs(mouse - cat2);
    if (cat1position < cat2position){
        return "Cat1"
    }
    else if (cat2position < cat1position){
        return "Cat2"
    }
    else {
        return "os gatos trombam e o rato foge"
    }
}

// console.log(catAndMouse(3, 2, 1))


const fizzBuzz = (array) => {
    let fizzBuzzlist = [];

    for (let index = 0; index < array.length; index += 1){
        switch (true){
            case array[index] % 3 === 0 && array[index] % 5 === 0:
                fizzBuzzlist.push("fizzBuzz");
                break;

            case array[index] % 3 === 0:
                fizzBuzzlist.push("fizz");
                break;

            case array[index] % 5 === 0:
                fizzBuzzlist.push("buzz");
                break;

            default:
                fizzBuzzlist.push("bug!")
                break;
        }
    }
    return fizzBuzzlist;
}

// console.log(fizzBuzz([2,2,5,6,3,5,15]))
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

const encode = (string) => {
    let newWord = string
    for (let index = 0; index < string.length; index += 1){
        switch (true) {
            case string[index] === "a":
                newWord = newWord.replace(string[index], "1");
                break;
            case string[index] === "e":
                newWord = newWord.replace(string[index], "2");
                break;
            case string[index] === "i":
                newWord = newWord.replace(string[index], "3");
                break;
            case string[index] === "o":
                newWord = newWord.replace(string[index], "4");
                break;
            case string[index] === "u":
                newWord = newWord.replace(string[index], "5");
                break;
        }
    }
    return newWord;
} 

// console.log(encode("hi there!"))


const decode = (string) => {
    let newWord = string
    for (let index = 0; index < string.length; index += 1){
        switch (true) {
            case string[index] === "1":
                newWord = newWord.replace(string[index], "a");
                break;
            case string[index] === "2":
                newWord = newWord.replace(string[index], "e");
                break;
            case string[index] === "3":
                newWord = newWord.replace(string[index], "i");
                break;
            case string[index] === "4":
                newWord = newWord.replace(string[index], "o");
                break;
            case string[index] === "5":
                newWord = newWord.replace(string[index], "u");
                break;
        }
    }
    return newWord;
} 

// console.log(decode("12345"))

const techLIst = (array, person) => {
    let javascript = [];
    if (array.length === 0){
        return false
    }

    for (let index = 0; index < array.length; index += 1){
        javascript.push({
            tech: array[index],
            name: person,
        });

    }

    return javascript
}

// console.log(techLIst(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], "Luiz"))

const generatePhoneNumber = (array) => {
    if (array.length !== 11){
        return `Array with incorrect length.`;
    }
    for (index = 0; index < array.length; index += 1){
        if (array[index] < 0 || array[index] > 9) {
            return `It was not possible to make a phone number with these values.`
        }
    }
    phoneNumber = array.join("");
    return phoneNumber;
}

// console.log(generatePhoneNumber([1,2,7,5,6,7,8,9,0,1,6]))



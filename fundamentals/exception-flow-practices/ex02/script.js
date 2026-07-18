const validateAverage = (n1, n2, n3, n4) => {
    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number" || typeof n4 !== "number") {
    throw new Error ("Você inseriu um valor inválido. Digite novamente.")
    }
}

const calculateAverage = (n1, n2, n3, n4) => {
    try {
        validateAverage(n1, n2, n3, n4);
        let sum = n1 + n2 + n3 + n4;
        let average = sum / 4;
        return average;
    }
    catch (error) {
        return(error.message);
    }
    
}

console.log (calculateAverage(2,6,9,10))
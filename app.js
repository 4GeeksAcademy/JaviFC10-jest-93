// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (euros) {
    return euros * oneEuroIs.USD;
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
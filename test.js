// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Test dollars to yens
test('1.07 dollars = 156.5 yens', () => {
    let howManyYens = fromDollarToYen(1.07);
    expect(howManyYens).toBe(156.5);
})

// Test euro to dollars
test('1 euro = 1.07 dollars', () => {
    let howManyDollars = fromEuroToDollar(1);
    expect(howManyDollars).toBe(1.07);
})

// Test yens to pounds
test('156.5 yens = 0.87 pounds', () => {
    let howManyPounds = fromYenToPound(156.5);
    expect(howManyPounds).toBe(0.87);
})
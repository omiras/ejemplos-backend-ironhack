const assert = require('assert');

function suma(a, b) {
    return a * b;
}

// Vamos a crear una aserción. Vamos a comprobar si una condición es cierta en este punto del código. En caso que no lo sea, el programa va a lanzar una excepción
assert.strictEqual(suma(1, 2), 3);
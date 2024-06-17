/**
 * El método map sirve para TRANSFORMAR cada elemento del array en otro elemento diferente (mapear un elemento en otro)
 */
const names = ["Zulema", "Andrii", "Esteban", "Connor", "Eva", "Ricardo"];

// Convierte cada string de este array en mayúsculas
// tu función de callback debe DEVOLVER un valor nuevo en el que quieres transformar ese elemento del array
console.log("mayúsculas", names.map(n => n.toUpperCase()));

// TEngo un array de precios. Aplica el IVA del 21% a cada uno de ellos

const precios = [100, 200, 300, 400];

console.log("precios con iva: ", precios.map(function (elem) {
    return elem * 0.21 + elem;
}));
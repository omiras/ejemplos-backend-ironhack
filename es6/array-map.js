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

console.log("Array enterior: ", precios);

const personas = [
    {
        nombre: "Juan",
        edad: 25,
        ciudad: "Madrid"
    },
    {
        nombre: "María",
        edad: 30,
        ciudad: "Barcelona"
    },
    {
        nombre: "Pedro",
        edad: 28,
        ciudad: "Valencia"
    },
    {
        nombre: "Ana",
        edad: 22,
        ciudad: "Sevilla"
    }
];

/**
 * Utiliza el método map para crear el siguiente string. La edad de jubilicación en España es 67. 
 * 
 * "Ana es de Sevilla y le quedan 45 años para jubilarse" 
 * 
 */

console.log("jubilados a la espera: ", personas.map(elem => {
    return `${elem.nombre} es de ${elem.ciudad} y le quedan ${67 - elem.edad} para jubiliarse  `;
}));
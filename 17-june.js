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

// Devuelve la primera persona mayor de 22 años
const mayorDe22 = personas.every(p => p.edad >= 22);
console.log("🚀 ~ file: 17-june.js:26 ~ mayorDe22:", mayorDe22);

// ¿Alguien vive en Barcleona?

console.log(personas.some(p => p.ciudad == "Barcelona"));

// TRANSFORMA este array en un nuevo array con los nombres de todas las personas
//console.log(personas.map(p => p.nombre));

// TRANSFORMA este array en un nuevo array en un array de string con el texto "Juan es de Madrid"
console.log(personas.map(p => {
    return `${p.nombre} es de ${p.ciudad}`
}));


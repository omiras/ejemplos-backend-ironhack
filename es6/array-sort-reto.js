// Definimos los nobles y sus títulos
let nobles = [
    { name: "Lord Edward", title: "Duque" },
    { name: "Sir Charles", title: "Barón" },
    { name: "Loraine Hudson", title: "Duque" },
    { name: "Lady Mary", title: "Conde" },
    { name: "Countess Eleanor", title: "Marqués" },
    { name: "Duke William", title: "Duque" },
    { name: "King Arthur", title: "Rey" },
    { name: "Sir Caballero Oscuro", title: "Barón" },
    { name: "Prince Encantado", title: "Príncipe" },
    { name: "Viscount Henry", title: "Vizconde" },
    { name: "Prince Richard", title: "Príncipe" },
];

// Definimos el orden de las categorías de títulos
const titleOrder = [
    "Barón",
    "Vizconde",
    "Conde",
    "Marqués",
    "Duque",
    "Príncipe",
    "Rey",
];

// Creamos la función de comparación para ordenar los títulos de menor a mayor. Es decir en primera posición debería aparecer el Rey, luego los principes, luego los Duques, y así hasta que en las útlimas posoiciones del array aparezcan los barones.

// https://hips.hearstapps.com/hmg-prod/images/los-bridgerton-netflix-1611144480.jpg



function compareTitles(a, b) {
    //...
}

// Ordenamos los nobles usando la función de comparación
nobles.sort(compareTitles);

console.log(nobles);

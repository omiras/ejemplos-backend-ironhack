const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/ironhackDB');

    // 1. Crear el Schema

    // 2. Asociarlo al Model

    // 3. Crear al menos 2 documentos.
    // Aragon que tiene 5 de poder de ataque, 12 de inteligencia , 10 de puntos de vida. Su nivel de personaje es 5
    // Gollum que tiene 2 de poder de ataque, 3 de inteligencia , 5 de puntos de vida. NO establecemos su nivel de persoje (por defecto se debería rellenar con un 0)



}
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://kevhughes24:kevhughes24@cluster0.qjzwuwk.mongodb.net/DungeonsAndDragons');

    // 1. Crear el Schema
    const characterSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "please add the character's name"]
        },
        attackPower: {
            type: Number,
            required: [true, "please add the number of attack power"]
        },
        intelligence: {
            type: Number,
            required: [true, "please add the level of intelligence"]
        },
        lifeForce: {
            type: Number,
            required: [true, "please add the level of life force"],
            min: [0, "the minimum should be greater than zero"]
        },
        level: {
            type: Number,
            default: 0
        }
    })

    // 2. Asociarlo al Model

    const Character = mongoose.model("Character", characterSchema);

    // 3. Crear al menos 2 documentos.
    // Aragon que tiene 5 de poder de ataque, 12 de inteligencia , 10 de puntos de vida. Su nivel de personaje es 5
    // Gollum que tiene 2 de poder de ataque, 3 de inteligencia , 5 de puntos de vida. NO establecemos su nivel de persoje (por defecto se debería rellenar con un 0)

    const Aragon = new Character({
        name: "Aragon",
        attackPower: 5,
        intelligence: 12,
        lifeForce: 10,
        level: 5
    })

    await Aragon.save()

    const Gollum = new Character({
        name: "Gollum",
        attackPower: 2,
        intelligence: 3,
        lifeForce: 5,
    })

    await Gollum.save()

    const GollumTwo = new Character({
        name: "Gollum Two",
        attackPower: 21,
        intelligence: 3,
        lifeForce: 5,
    })

    await GollumTwo.save()

    console.log("Character was created successfully")

}
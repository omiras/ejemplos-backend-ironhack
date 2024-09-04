const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/tecnocasa');


oneToMany();

async function oneToMany() {
    const mongoose = require("mongoose")


    const ownerSchema = new mongoose.Schema({
        name: String
    })

    const Owner = mongoose.model("Owner", ownerSchema)

    const houseSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String,
        owner: { type: mongoose.Types.ObjectId, ref: "Owner" }
    })

    const House = mongoose.model("House", houseSchema)

    // Create a Owner
    const alex = await Owner.create({ name: "Alex Merced" })

    // Create a new house
    House.create({
        street: "100 Maple Street",
        city: "Fort Townville",
        state: "New West Virgota",
        zip: "77777",
        owner: alex
    })

    // query for all houses, use populate to include owner info
    console.log(await House.findOne().populate("owner"));
}

function oneToOne() {
    const Owner = new mongoose.Schema({
        name: String,
        // un propietario realmente va a tener muchos mas campos. DNI, fecha nacimineto, deudas hacienda, etc.
    })
    const houseSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String,
        owner: Owner // subSchema
    })

    const House = mongoose.model("House", houseSchema)
    // Create a new house
    House.create({
        street: "100 Maple Street",
        city: "Fort Townville",
        state: "New West Virgota",
        zip: "77777",
        owner: { name: "Alex Merced" }
    })

    // query for all houses, will include the nested owner info
    House.find({}).then(h => {
        console.log(h);
    });
}
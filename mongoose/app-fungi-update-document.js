const mongoose = require('mongoose');


const fungusSchema = new mongoose.Schema({
    name: String,
    toxicityLevel: Number // 0..nada toxico..10 muy tóxico
});

const Fungus = mongoose.model('Fungus', fungusSchema);

updateById().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/IronFungis'); // Nos conectamos a la base de datos 'Ironcats'

    // Creamos una nueva seta
    const amanita = new Fungus({
        name: "Amanita Muscara",
        toxicityLevel: 8
    })

    // Guardarlo en base de datos
    await amanita.save();

    // Gato creado
    console.log('Seta creada correctamente');
}

async function update() {
    /** Imagina que la Amanita muscara ya se encuentra en nuestra base de datos, pero se han dado cuenta que su nivel de toxicidad era mayor al que se cononocía hasta ahora */
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/IronFungis'); // Nos conectamos a la base de datos 'Ironcats'

    // 1. Buscamos la seta "Amanita Muscara" de la base de datos
    const amanita = await Fungus.findOne({ name: 'Amanita Muscara' });


    // 2. Actualizaremos su nivel de toxicidad
    amanita.toxicityLevel = 100;

    // 3. Le aplicaremos de nuevo el método .save()
    await amanita.save();
}

async function updateById() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/IronFungis'); // Nos conectamos a la base de datos 'Ironcats'

    await Fungus.findByIdAndUpdate("66b25c4dc1e43b7441c683b1", {
        name: "Amanita MUSCARA",
        toxicityLevel: 2000
    });

    console.log('Documento actualizado!');

}
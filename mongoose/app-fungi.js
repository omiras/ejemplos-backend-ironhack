const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/IronFungis'); // Nos conectamos a la base de datos 'Ironcats'

 
    const fungusSchema = new mongoose.Schema({
        name: String,
        toxicityLevel: Number // 0..nada toxico..10 muy tóxico
    });

    

   
    const Fungus = mongoose.model('Fungus', fungusSchema);

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
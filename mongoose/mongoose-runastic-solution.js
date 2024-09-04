const mongoose = require("mongoose")

// CAMBIAD EL MONGODB_URI
// En realidad antes de hacer ninguna operación (insertar, actualizar, etc) en base datos, deberíamos esperar a que se conectara a MongoDB (Atlas)
mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/runastic');

// 1. Crear Schema
const userSchema = new mongoose.Schema({
    userName: String, // todos los campos son required
    password: String,
    userType: {
        type: String,
        enum: ['Free', 'Premium']
    },
    physicalCondition: {
        age: Number,
        weight: Number,
        height: Number,
        exerciseFrequency: {
            type: Number,
            min: 0,
            max: 7
        }
    },
    runRecords: [{
        startDate: Date,
        endDate: Date,
        feeling: {
            type: String,
            enum: ['Satisfied', 'Dissatisfied', 'Neutral']
        }
    }]
});

// relacionarlo con un modelo (colección de MongoDB)
const User = mongoose.model('user', userSchema);

newRunRecord().catch(err => console.log(err));

async function newRunRecord() {
    // 1. Seleccionar el perfil de la app
    const user = await User.findOne({ userName: 'john@gmail.com' });

    // 1.5. Le doy a START para empezar a correr y a FINISH cuando he acabado

    // 2. Añadir un nuevo objeto al array de .runRecords
    user.runRecords.push({
        startDate: new Date('2024-09-02T18:00:00Z'),
        endDate: new Date('2024-09-02T18:30:00Z'),
        feeling: 'Satisfied'
    });

    await user.save();
    console.log('Nuevo registro añadido.');
}

async function insert() {
    console.log('Ejecutando mongoose runastic');
    /**
     * Modelad este esquema: App Runastic
     * 
     * https://www.notion.so/Planificaci-n-Back-End-FOAP-2024-IronHack-47fb5e2b62544704963209287f44c0ca?pvs=4#d0b05b3d44654851b935a7dc2c425e22
     */


    // 2. Insertar usuario
    const newUser = await User.create({
        userName: "john@gmail.com",
        password: "1234",
        userType: 'Free',
        physicalCondition: {
            age: 33,
            weight: 70, // kg
            height: 175, // cm
            exerciseFrequency: 0, // just installed the app
        }
    });
    console.log("🚀 ~ file: mongoose-runastic-solution.js:60 ~ insert ~ newUser:", newUser)



    // 4. Modificar estado físico

    // 5. Documento con todos los campos necesarios. Pros y contras
}
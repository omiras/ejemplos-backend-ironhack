const mongoose = require('mongoose');

main().catch(err => {
    console.error('SI CAPTURAMOS EL ERROR.');
    console.error(err.message);
});

async function main() {

    await mongoose.connect('mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/ironhackDB');

    // 1. Crear el Schema
    /** Los usuarios tienen un nombre, apellidos y fecha de nacimiento. Queremos también vamos a guardar la forma de contacto que es a través de un teléfono y su email. También vamos a guardar el nombre de los cursos que ha cursado hasta el momento. */
    const studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: [true, 'We need the last name to register the user']
        },
        birthDate: Date, // opcional
        contact: {
            phone: {
                type: String,
                required: [true, 'The phone field is mandatory'],
                validate: {
                    validator: function (v) {
                        // Valida que el teléfono tenga un formato simple
                        return /^[\d\s\-\+\(\)]{7,15}$/.test(v);
                    },
                    message: 'El teléfono no es válido'
                }
            },
            email: {
                // Preferida para usar validación por expresiones regulares
                type: String,
                required: [true, 'Email is mandatory'],
                match: [/.+@.+\..+/, 'Email is not valid']
            }
        },
        finishedCourses: {
            type: [String],
            default: [] // la palabra default establece un valor por defecto para el documento en caso de que el usuario no informe
        }

    })

    // 2. Relacionar el Schema con un Model
    const User = mongoose.model('user', studentSchema);

    // Ya disponemos de la clase 'User' para poder crear nuevos estudiantes para nuestra base de datos
    const matias = new User({
        name: "pepe",
        lastName: "Muller",
        birthDate: new Date('1990-10-10'),
        contact: {
            phone: "666777888",
            email: "mulcom"
        },
        finishedCourses: ["HTML 101"]
    });

    // Guardamos el usuario en la base de datos
    const documentCreated = await matias.save();

    // Consultar todos los datos del usuario que se acaba de crear
    console.log(documentCreated);
    // res.status(201).send(documentCerated);


    console.log('Usuario guardado correctamente');
}
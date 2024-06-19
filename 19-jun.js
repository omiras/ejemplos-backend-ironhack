
// operador ternario. Hacemos ejemplos javascript.info. Lo aplicamos en el MAth.sign de ayer

// ¿Por qué podemos declarar los array con const?

// ¿Cómo copiar un array BIEN? (operador spread)
const numbers = [1, 2, 3];
const copyNumbers = [...numbers, 4];
console.log("🚀 ~ file: 19-jun.js:9 ~ copyNumbers:", copyNumbers)

// ¿Cómo copiar una parte de un array? (operador spread)

// ¿Cómo copiar un objeto BIEN? (campo a campo sin operadores especiales)
const persona = {
    nombre: "Pepe",
    edad: 33
}

const personaCopiada = {
    nombre: persona.nombre,
    edad: persona.edad
};
persona.edad++;
console.log("🚀 ~ file: 19-jun.js:23 ~ personaCopiada:", personaCopiada)

// ¿Cómo copiar un objeto BIEN? (usando el operador de spread)
const copiaPersonaSpread = { ...persona };

console.log("🚀 ~ file: 19-jun.js:29 ~ copiaPersonaSpread:", copiaPersonaSpread)
// ¿Cómo copiar un objeto parcialmente ? (usando el operador de spread). Vemos ejemplo simple y su uso dentro de un map
const personaCopiadaSpread = {

    ...persona,
    sexo: "Masculino"
}
console.log("🚀 ~ file: 19-jun.js:32 ~ personaCopiadaSpread:", personaCopiadaSpread)

// Otros usos del operador de spread: Pasar todos los parámetros de una función
const maxNumber = Math.max(1, -1, 4, 23, 7);
console.log("🚀 ~ file: 19-jun.js:40 ~ maxNumber:", maxNumber)

console.log("using spread operator Math.max: ", Math.max(...numbers))

// Desestructuración de objetos (desestructure assigment)
// Obtener la propiedad o propiedades de un objeto que te interese
// Vemos un ejemplo simple, uno de flightReservations, vemos un ejemplo de una llamada a la API (examen)

const reservaAirbnb = {
    idReserva: "reserva123", // Identificador único de la reserva
    estadoReserva: "Confirmada", // Estado actual de la reserva (ejemplo: Confirmada, Pendiente, Cancelada)
    metodoContacto: "Email", // Método preferido de contacto con el huésped (ejemplo: Email, Teléfono)
    necesidadesEspeciales: ["Cama adicional", "Silla de ruedas"], // Lista de necesidades especiales solicitadas por el huésped
    preferencias: {
        tipoCama: "Cama matrimonial", // Preferencia de tipo de cama del huésped
        vistas: "Vistas al mar", // Preferencia de vistas desde la propiedad
        plantaPreferida: "Planta baja" // Preferencia de planta dentro del edificio
    },
    documentos: {
        tipoDocumento: "Pasaporte",
        numeroDocumento: "AB123456", // Número de documento de identidad del huésped
        paisEmision: "España", // País de emisión del documento
        fechaExpiracion: "2026-05-01" // Fecha de expiración del documento
    },
    preferenciasAlimentacion: {
        vegetariano: false, // Si el huésped tiene preferencias vegetarianas
        alergias: [], // Lista de alergias alimentarias del huésped
        requerimientosEspeciales: "Sin gluten" // Requerimientos dietéticos especiales
    },
    transporte: {
        aeropuerto: "Sí", // Si se requiere transporte desde/hacia el aeropuerto
        tipoTransporte: "Transfer privado", // Tipo de transporte solicitado (ejemplo: Transfer privado, Taxi)
        numeroVuelo: "AB1234" // Número de vuelo del huésped, si aplica
    },
    extras: ["Botella de vino de bienvenida", "Tour guiado por la ciudad"], // Servicios o extras adicionales solicitados por el huésped
    notasAdicionales: "Por favor confirmar la disponibilidad de parking para un vehículo grande." // Notas adicionales o requerimientos especiales del huésped
};

const { idReserva, estadoReserva, transporte: { numeroVuelo } } = reservaAirbnb;
console.log("🚀 ~ file: 19-jun.js:79 ~ numeroVuelo:", numeroVuelo)
console.log("🚀 ~ file: 19-jun.js:79 ~ idReserva:", idReserva)


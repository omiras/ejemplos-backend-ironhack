function saludar(nombre) {
    // Saludo a todas las personas menos a Esteban que me cae mal
    if (nombre == "Esteban") {
        return;
    }

    console.log(`Hola ${nombre}`);
}

saludar("Vanya");
const express = require('express');

const app = express();

app.get('/api/book/:isbn', async (req, res) => {
    // Vamos a un crear un endpoint para devolver todos los datos de un libro dado su ISBN
    // http://localhost:3000/api/book/9780061122415
    const { isbn } = req.params;

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

    const data = await response.json();

    res.json(data);

})

app.listen(3001, () => {
    // Nos conectamos a la base de datos de MongoDB
    console.log(`Servidor escuchando en el puerto 3001`);
})
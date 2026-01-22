// index.js - Servidor Express simple
// Autor: Estudiante - Lab 6 CI/CD
// Fecha: 22/01/2026

const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint principal
app.get('/', (req, res) => {
    res.send('¡Hola desde el servidor Express! - Lab 6 CI/CD');
});

// Iniciar servidor solo si no estamos en modo test
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

module.exports = app;

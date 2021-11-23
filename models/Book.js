// 1. Importaciones.

const mongoose = require("mongoose")

// 2. Schema
// Requisitos para crear un libro.

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    rating: Number
    // Establece la fecha en la que fue creado.
}, {timestamps: true })

// 3. Generación de modelo.

const Book = mongoose.model("Book", bookSchema)

// 4. Exportación.

module.exports = Book
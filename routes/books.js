// 1. Importaciones

const express = require("express")
const router = express.Router() // Estableciendo en instancia el manejo del ruteo

const bookController = require("./../controllers/bookController")

// 2. Rutas de la URL base
// Se lee de arriba a abajo, revisa cada ruta y cuando encuentra una coincidencia, se queda en esa ruta y se olvida del resto, por eso create va antes del read, por los : <-- esto tiene que ir al final, entra a /:bookID y ya no sale de ahí si ponemos el Read antes que el Create. Hay que dividir los parámetros dinámicos y estáticos.

// Create.... Crear un libro
// Crear libro, vista, para ver el formulario
router.get("/create", bookController.viewCreateBook)
// Crear libro, ruta para el formulario. Para recibir datos del formulario
router.post("/create", bookController.createBook)

// Read.....
// Lectura de los libros creados
router.get("/", bookController.getAllBooks)

// Lectura de un libro específico.
//:bookID -> cualquier parámetro despues de / va a ejecutar bookController.getBook -.- los : hacen al parámetro dinámico.
router.get("/:bookID", bookController.getBook)

// Edit......
// Editar la información de un libro.
router.get("/:bookID/edit", bookController.viewEditBook)
router.post("/:bookID/edit", bookController.editBook)

// Delete.......
// Borrar un libro en específico.
router.post("/:bookID/delete", bookController.deleteBook)

// 3. Exportaciones

module.exports = router
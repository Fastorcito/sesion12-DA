const express = require('express');
const router = express.Router();

const alumnosController = require('../controllers/alumnosController.js');

router.get('/', alumnosController.obtenerAlumnos);

router.post('/', alumnosController.crearAlumno);

router.put('/:id', alumnosController.actualizarAlumno);

router.delete('/:id', alumnosController.eliminarAlumno);

module.exports = router;
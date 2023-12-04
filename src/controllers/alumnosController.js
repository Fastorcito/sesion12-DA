let alumnos = [];

const obtenerAlumnos = (req, res) => {
    res.json({ mensaje: 'Obteniendo alumnos', alumnos })
};

const crearAlumno = (req, res) => {
    const { nombre, carrera, semestre } = req.body;
    const nuevoAlumno = { nombre, carrera, semestre };
    alumnos.push(nuevoAlumno);
    res.json({ mensaje: 'Alumno Creado', alumno: nuevoAlumno })
};

const actualizarAlumno = (req, res) => {
    const { id } = req.params;
    const { nombre, carrera, semestre } = req.body;

    const alumnoIndex = alumnos.findIndex(alumno => alumno.id === parseInt(id));
    if (alumnoIndex !== -1) {
        alumnos[alumnoIndex] = { id: parseInt(id), nombre, carrera, semestre };
        res.json({ mensaje: `Alumno actualizado con ID ${id}` });
    } else {
        res.status(404).json({ mensaje: 'Alumno no encontrado' });
    }
};

const eliminarAlumno = (req, res) => {
    const { id } = req.params;
    alumnos = alumnos.filter(alumno => alumno.id !== parseInt(id));
    res.json({ mensaje: `Alumno eliminado con ID ${id}` });
};

module.exports = {
    obtenerAlumnos,
    crearAlumno,
    actualizarAlumno,
    eliminarAlumno,
};
const express = require('express');
const alumnosRoutes = require('./routes/alumnosRoutes.js');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
app.use('/api/alumnos', alumnosRoutes);

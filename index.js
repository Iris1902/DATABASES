require('dotenv').config();
const express = require('express');
const app = express();

const usuarioRoutes = require('./routes/usuarioRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const actividadRoutes = require('./routes/actividadRoutes');

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/contactos', contactoRoutes);
app.use('/actividades', actividadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

require('dotenv').config();
const mysql = require('mysql2/promise');

const base1 = mysql.createPool({
    host: process.env.DB1_HOST,
    user: process.env.DB1_USER,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME
});

const contactos = mysql.createPool({
    host: process.env.DB2_HOST,
    user: process.env.DB2_USER,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME
});

const actividad = mysql.createPool({
    host: process.env.DB3_HOST,
    user: process.env.DB3_USER,
    password: process.env.DB3_PASSWORD,
    database: process.env.DB3_NAME
});

(async () => {
    try {
      await base1.query('SELECT 1');
      console.log('✅ Conectado a distribuida_base1');
      await contactos.query('SELECT 1');
      console.log('✅ Conectado a distribuida_contactosdb');
      await actividad.query('SELECT 1');
      console.log('✅ Conectado a distribuida_actividaddb');
    } catch (err) {
      console.error('❌ Error de conexión a la base de datos:', err.message);
    }
})();

module.exports = { base1, contactos, actividad };
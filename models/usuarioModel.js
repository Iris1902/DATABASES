const { base1 } = require('../config/db');

const getAllUsuarios = async () => {
  const [rows] = await base1.query('SELECT * FROM Usuarios');
  return rows;
};

const createUsuario = async (nombre, apellido) => {
  await base1.query('INSERT INTO Usuarios (nombre, apellido) VALUES (?, ?)', [nombre, apellido]);
};

module.exports = { getAllUsuarios, createUsuario };

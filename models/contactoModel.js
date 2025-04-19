const { contactos } = require('../config/db');

const getContactoPorUsuario = async (usuarioId) => {
  const [rows] = await contactos.query(
    `SELECT c.contacto_id, d.calle, d.ciudad, d.pais, t.numero, t.tipo
     FROM Contacto_Usuario c
     JOIN Direcciones d ON c.direccion_id = d.direccion_id
     JOIN Telefonos t ON c.telefono_id = t.telefono_id
     WHERE c.usuario_id = ?`, [usuarioId]
  );
  return rows;
};

module.exports = { getContactoPorUsuario };

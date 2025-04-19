const { actividad } = require('../config/db');

const getActividadesPorUsuario = async (usuarioId) => {
  const [rows] = await actividad.query(
    `SELECT a.actividad_id, a.descripcion, a.fecha, t.nombre_tipo
     FROM Usuario_Actividad ua
     JOIN Actividades a ON ua.actividad_id = a.actividad_id
     JOIN Tipos_Actividad t ON ua.tipo_id = t.tipo_id
     WHERE ua.usuario_id = ?`, [usuarioId]
  );
  return rows;
};

module.exports = { getActividadesPorUsuario };

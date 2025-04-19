const Actividad = require('../models/actividadModel');

const getActividades = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const actividades = await Actividad.getActividadesPorUsuario(usuarioId);
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getActividades };

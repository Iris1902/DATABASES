const Contacto = require('../models/contactoModel');

const getContacto = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const contactos = await Contacto.getContactoPorUsuario(usuarioId);
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getContacto };

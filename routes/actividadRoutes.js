const express = require('express');
const router = express.Router();
const controller = require('../controllers/actividadController');

router.get('/:usuarioId', controller.getActividades);

module.exports = router;

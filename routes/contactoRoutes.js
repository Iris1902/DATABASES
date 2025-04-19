const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactoController');

router.get('/:usuarioId', controller.getContacto);

module.exports = router;

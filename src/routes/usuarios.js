const express = require('express');
const router = express.Router();
const { requiredScopes } = require("express-oauth2-jwt-bearer");

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

// a. GET /usuarios: Returns the complete list of Usuarios.
router.get('/', requiredScopes("read:usuarios"), getAllUsuarios);

// b. GET /usuarios/:id: Returns the details of a specific Usuario based on their ID.
router.get('/:id', requiredScopes("read:usuarios"), getUsuarioById);

// c. POST /usuarios: Create a new Usuario with the information provided.
router.post('/', requiredScopes("write:usuarios"), createUsuario);

// d. PUT /usuarios/:id: Updates information for a specific Usuario based on their ID.
router.put('/:id', requiredScopes("write:usuarios"), updateUsuario);

// e. DELETE /usuarios/:id: Delete a specific Usuario based on their ID.
router.delete('/:id', requiredScopes("write:usuarios"), deleteUsuario);

module.exports = router;
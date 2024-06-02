const express = require('express');
const router = express.Router();
const connection = require('../config/db');

router.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  // Verificar si el usuario o el correo ya existen en la base de datos
  const checkQuery = `SELECT * FROM users WHERE username = ? OR email = ?`;
  connection.query(checkQuery, [username, email], (err, results) => {
    if (err) {
      console.error('Error al verificar usuario o correo existente:', err);
      return res.status(500).send('Error al verificar usuario o correo existente');
    }

    // Si se encuentra un usuario o correo duplicado, enviar un error
    if (results.length > 0) {
      return res.status(400).send('El usuario o el correo electrónico ya existen');
    }

    // Si no hay usuarios o correos duplicados, proceder con el registro
    const insertQuery = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
    connection.query(insertQuery, [username, password, email], (err, result) => {
      if (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).send('Error al registrar el usuario');
      }
      res.status(200).redirect('/login'); // Redireccionar al usuario a la página de inicio de sesión
    });
  });
});

module.exports = router;

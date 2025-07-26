const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkRole = require('../middlewares/checkRole');

router.get('/panel-director', auth, checkRole('director'), (req, res) => {
  res.render('panel', { rol: 'Director', usuario: req.user });
});

router.get('/panel-docente', auth, checkRole('docente'), (req, res) => {
  res.render('panel', { rol: 'Docente', usuario: req.user });
});

router.get('/panel-estudiante', auth, checkRole('estudiante'), (req, res) => {
  res.render('panel', { rol: 'Estudiante', usuario: req.user });
});

module.exports = router;

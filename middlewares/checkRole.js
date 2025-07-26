function checkRole(role) {
  return function(req, res, next) {
    if (!req.user) {
      return res.status(403).send('No hay usuario cargado');
    }

    if (req.user.rol !== role) {
      return res.status(403).send(`Acceso denegado para el rol: ${req.user.rol}`);
    }

    next();
  };
}

module.exports = checkRole;

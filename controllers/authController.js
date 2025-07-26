const supabase = require('../models/supabaseClient');

async function showLogin(req, res) {
  res.render('sesion/login', { error: null });
}

async function showSignup(req, res) {
  res.render('sesion/signup', { error: null });
}

async function login(req, res) {
  const { correo, contraseña } = req.body;

  const { data: user, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('correo', correo)
    .eq('contraseña', contraseña)
    .single();

  if (error || !user) {
    return res.render('login', { error: 'Credenciales inválidas' });
  }

  res.cookie('user_id', user.id_usuario);
  res.redirect(`/panel-${user.rol}`);
}

async function signup(req, res) {
  const { nombre_completo, correo, contraseña, rol } = req.body;

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nombre_completo, correo, contraseña, rol }]);

  if (error) {
    return res.render('signup', { error: 'Error al registrar usuario' });
  }

  res.redirect('/login');
}

async function logout(req, res) {
  res.clearCookie('user_id');
  res.redirect('/login');
}

module.exports = { showLogin, showSignup, login, signup, logout };

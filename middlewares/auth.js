const supabase = require('../models/supabaseClient');

async function auth(req, res, next) {
  const userId = req.cookies.user_id;

  if (!userId) {
    return res.redirect('/login');
  }

  const { data: user, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id_usuario', userId)
    .single();

  if (error || !user) {
    return res.redirect('/login');
  }

  req.user = user;
  next();
}

module.exports = auth;

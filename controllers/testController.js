const supabase = require('../models/supabaseClient');

async function testConnection(req, res) {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .limit(1);

    if (error) {
      return res.status(500).json({ message: 'Error querying supabase', error });
    }

    res.status(200).json({ message: 'Connection successful!', data });
  } catch (err) {
    res.status(500).json({ message: 'Unexpected error', err });
  }
}

module.exports = { testConnection };

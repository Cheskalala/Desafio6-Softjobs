const pool = require('../db/db');
const bcrypt = require('bcryptjs');

const User = {
  async createUser(email, password, rol, lenguage) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, hashedPassword, rol, lenguage]
    );
    return result.rows[0];
  },

  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
  }
};

module.exports = User;

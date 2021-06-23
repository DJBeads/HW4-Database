const mariadb = require('mariadb');

let pool;

async function createConnectionPool() {
  pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'office-management',
    connectionLimit: 1,
  });
}

async function getConnection() {
  return await pool.getConnection();
}

async function closeConnectionPool() {
  await pool.end();
}

module.exports = {
  createConnectionPool,
  getConnection,
  closeConnectionPool,
};

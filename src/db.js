require('dotenv').config();
const { Pool } = require('pg');

// Crie uma nova pool de conexões com o banco de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
// const pool = new Pool({
//   user: 'postgres.vxoawppcwosabhsqppsm',
//   host: 'aws-0-sa-east-1.pooler.supabase.com',
//   database: 'postgres',
//   password: 'T@p$06supabase',
//   port: 6543,
// });

// Exporta a pool para uso em outras partes da aplicação
module.exports = pool;

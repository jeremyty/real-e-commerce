// let express = require ("express");
// const cors = require('cors');
// let app = express()
// app.use(cors());
// app.use(express.json());

// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     require: true,
//   },
// });

// async function getPostgresVersion() {
//   const client = await pool.connect();
//   try {
//     const response = await client.query('SELECT version()');
//     console.log(response.rows[0]);
//   } finally {
//     client.release();
//   }
// }

// getPostgresVersion();

// //add product


// app.listen(3000, () => {
//   console.log("App is listening on port 3000");
// });
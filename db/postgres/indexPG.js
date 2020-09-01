/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const { Pool } = require('pg');
const { config } = require('./configPG.js');

const pool = new Pool(config);

pool.connect()
  .then((client) => {
    return client
      .query('SELECT $1::text as message', ['Wassup'])
      .then((response) => {
        client.release();
        console.log(response.rows[0].message);
      })
      .catch((error) => {
        client.release();
        console.log('Error connecting to pool: ', error);
      });
  });

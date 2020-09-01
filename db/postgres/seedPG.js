/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
const { Pool } = require('pg');
const { dataGenerator } = require('../data');
const { config } = require('./configPG.js');

const pool = new Pool(config);

const mockData = dataGenerator();
// console.log(mockData.length);
// console.log(mockData[9999999]);

pool.connect()
  .then((client) => {
    return client
      .query('CREATE TABLE IF NOT EXISTS products \
              itemID INT PRIMARY KEY,\
              itemName VARCHAR(50) NOT NULL, \
              itemPrice DECIMAL(5,2) NOT NULL, \
              departmentID INT ')
      .then((response) => {
        client.release();
        console.log(response.rows[0].message);
      })
      .catch((error) => {
        client.release();
        console.log('Error connecting to pool: ', error);
      });
  });

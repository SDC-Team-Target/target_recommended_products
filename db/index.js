/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to db: ', err);
    return;
  }
  console.log('Connection to db succesful!');
});

const queryAllProducts = function (cb) {
  const queryStr = `SELECT * FROM items;`;
  connection.query(queryStr, (err, products) => {
    if (err) {
      console.log('Error querying products: ', err);
      cb(err, null);
    } else {
      cb(null, products);
    }
  });
};

const queryByID = function (id, cb) {
  const str = `SELECT * from items WHERE item_id = ? ;`;
  connection.query(str, [id], (err, product) => {
    if (err) {
      console.log('Error querying product by ID ', err);
      cb(err, null);
    } else {
      cb(null, product);
    }
  });
};

const addProduct = function(params, cb) {
  console.log('IN DB: ', params);
  const str = 'INSERT INTO items (item_id, item_name, category, item_price, img_url) VALUES (?, ?, ?, ?, ?)';
  const {
    item_id, item_name, category, item_price, img_url
  } = params;
  connection.query(str, [item_id, item_name, category, item_price, img_url], (err, confirmation) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, confirmation);
    }
  });
};

const deleteProduct = (id, cb) => {
  const str = 'DELETE FROM items WHERE item_id = ?';
  connection.query(str, [id], (err, confirmation) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, confirmation);
    }
  });
};

const updateProduct = (params, cb) => {
  const str = 'UPDATE items SET item_name = ?, category = ?, item_price = ?, img_url = ? WHERE item_id = ?;';
  const {
    item_name, category, item_price, img_url, item_id,
  } = params;
  // eslint-disable-next-line max-len
  connection.query(str, [item_name, category, item_price, img_url, item_id], (err, confirmation) => {
    // eslint-disable-next-line no-console
    console.log('ERROR: ', err);
    if (err) {
      cb(err, null);
    } else {
      cb(null, confirmation);
    }
  });
};

module.exports = {
  queryAllProducts, queryByID, addProduct, updateProduct, deleteProduct,
};

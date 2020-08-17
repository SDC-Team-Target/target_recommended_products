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
  // const queryStr = `SELECT items.* FROM items INNER JOIN categories ON items.category = categories.category_id AND categories.category_name = 'Kitchen'`;
  const queryStr = `SELECT * FROM items;`
  connection.query(queryStr, (err, products) => {
    if(err) {
      console.log('Error querying products: ', err);
      cb(err, null);
    } else {
      cb(null, products);
    }
  });
};

const queryByID = function(id, cb) {
  const str = `SELECT * from items WHERE item_id = ? ;`
  connection.query(str, [id], (err, product) => {
    if(err) {
      console.log('Error querying product by ID ', err);
      cb(err, null);
    } else {
      cb(null, product);
    }
  })
}

module.exports = { queryAllProducts, queryByID };

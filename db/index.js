const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err)=> {
  if (err) {
    console.log('Error connecting to db: ', err);
    return;
  }
  console.log('Connection to db succesful!');
})

const queryKitchenProducts = function(cb){
  const queryStr = `SELECT items.* FROM items INNER JOIN categories ON items.category = categories.category_id AND categories.category_name = 'Kitchen'`;

  connection.query(queryStr, (err, products, fields)=> {
    if (err) {
      console.log('Error querying products: ', err);
      cb(err, null);
    } else {
      cb(null, products);
    }
  })
}

module.exports = {queryKitchenProducts};
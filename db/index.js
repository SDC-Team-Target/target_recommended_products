const mysql = require('mysql');

const config = {
  host: 'localhost',
  user: 'root',
  password: 'Yellowbottle',
  database: 'products'
};

const connection = mysql.createConnection(config);

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

//query products with category 
// select items.item_name from items inner join categories
//  on items.category = categories.category_id and categories.category_name = 'kitchen';
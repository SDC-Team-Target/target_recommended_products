/* eslint-disable no-console */
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
});

// const createKeyspace = () => {
//   const createKeyspaceQuery = `CREATE KEYSPACE IF NOT EXISTS keyspace_target_sdc WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' } AND durable_writes = 'true'`;
//   client.execute(createKeyspaceQuery, (err) => {
//     if (err) {
//       console.log(`Error creating keyspace: ${err}`);
//     } else {
//       console.log('Keyspace successfully created');
//     }
//   });
// };

// const createProductsByIDTable = () => {
//   const createProductsByIDQuery = 'CREATE TABLE IF NOT EXISTS keyspace_target_sdc.products_by_id ( itemID int PRIMARY KEY, itemName text, itemPrice decimal, itemDepartment text )';
//   client.execute(createProductsByIDQuery, (err) => {
//     if (err) {
//       console.log(`Error creating Products by ID table: ${err}`);
//     } else {
//       console.log('Products by ID Table successfully created');
//     }
//   });
// };

const createProductsByNameTable = () => {
  const createProductsByNameQuery = 'CREATE TABLE IF NOT EXISTS keyspace_target_sdc.products_by_name ( itemName text, itemID int, itemPrice decimal, itemDepartment text, PRIMARY KEY (itemName, itemID))';
  client.execute(createProductsByNameQuery, (err) => {
    if (err) {
      console.log(`Error creating Products by Name table: ${err}`);
      console.log(err);
    } else {
      console.log('Products by Name table successfully created');
    }
  });
};

client.connect((err) => {
  if (err) {
    console.log(`Error connecting to the db:  ${err}`);
  } else {
    console.log('Hello from cassie');
    // createKeyspace();
    // createProductsByIDTable();
    createProductsByNameTable();
  }
});

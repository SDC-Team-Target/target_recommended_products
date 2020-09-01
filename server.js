/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const {
  queryAllProducts, queryByID, addProduct, updateProduct, deleteProduct,
} = require('./db/legacy/index');

const PORT = 4040;
const app = express();

app.use(express.static('./public'));
app.use(cors());

// items/:id
app.get('/items/:id', (req, res) => {
  console.log('The requested id:', req.params.id);
  queryByID(req.params.id, (err, item) => {
    if (err) {
      console.log('Error in server, querying by ID', err);
      res.status(500).send(`Could not retrieve items with ID: ${req.params.id}`);
    } else {
      res.status(200).send(item);
    }
  });
});

// app.get('/items', (req, res) => {
//   queryAllProducts((err, items) => {
//     if (err) {
//       res.status(500).send('Could not retrieve items');
//     } else {
//       res.status(200).send(items);
//     }
//   });
// });

app.delete('/items/:id', (req, res) => {
  deleteProduct(req.params.id, (err, confirmation) => {
    if (err) {
      res.status(500).send('Error deleting product: ', err);
    } else {
      res.status(200).send('Product deleted.');
    }
  });
});

app.post('/items/:id', (req, res) => {
  addProduct(req.query, (err, confirmation) => {
    if (err) {
      res.status(500).send('Error adding product: ', err);
    } else {
      res.status(200).send('Product added.');
    }
  });
});

app.put('/items/:id', (req, res) => {
  updateProduct(req.query, (err, confirmation) => {
    if (err) {
      res.status(500).send('Error updating product: ', err);
    } else {
      res.status(200).send('Product updated.');
    }
  });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

const express = require('express');
const cors = require('cors');
const { queryAllProducts, queryByID } = require('./db/index');

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

app.get('/items', (req, res) => {
  queryAllProducts((err, items) => {
    if (err) {
      res.status(500).send('Could not retrieve items');
    } else {
      res.status(200).send(items);
    }
  });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

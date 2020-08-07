const express = require('express');
const path = require('path');
const {queryKitchenProducts} = require('./db/index');
const PORT = 4040;

const app = express();

app.use(express.static('./public'));

app.use('/kitchen', (req, res) => {
  queryKitchenProducts((err, items)=> {
    if (err) {
      res.status(500).send('Could not retrieve items');
    } else {
      res.status(200).send(items);
    }
  })
})


app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
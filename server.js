const express = require('express');
const path = require('path');
const cors = require('cors');
const {queryKitchenProducts} = require('./db/index');


const app = express();

app.use(express.static('./public'));
app.use(cors());

app.get('/kitchen', (req, res) => {
    queryKitchenProducts((err, items)=> {
        if (err) {
            res.status(500).send('Could not retrieve items');
        } else {
            res.status(200).send(items);
        }
    })
})


const PORT = 4040;
app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
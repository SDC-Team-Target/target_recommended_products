const express = require('express');
const path = require('path');
const PORT = 4040;

const app = express();

app.use(express.static('./public'));

app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
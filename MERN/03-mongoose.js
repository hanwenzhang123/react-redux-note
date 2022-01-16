//what is MongoDB?
- a NoSQL database which stores documents in collections (instead of record in tables as in SQL)
- stores application data (users, places)
- enforces no data schema or relations
- easily connected to node/express (not to react)
- a powerful database which can easily be integrated into a node/express environment

//What is Mongoose?
- a popular library for MongoDB

//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');


const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.listen(3000);


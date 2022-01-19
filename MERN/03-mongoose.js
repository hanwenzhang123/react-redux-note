//what is MongoDB?
- a NoSQL database which stores documents in collections (instead of record in tables as in SQL)
- stores application data (users, places)
- enforces no data schema or relations
- easily connected to node/express (not to react)
- a powerful database which can easily be integrated into a node/express environment

npm i mongodb

//What is Mongoose?
- a popular library for MongoDB


//MongoDB
//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');

const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.listen(3000);

//mongo.js
const MongoClient = require('mongodb').MongoClient; //get the MongoClient class from mongodb

const url =   //the connection string you get from your mongodb altas, connect => connect your application
  'mongodb+srv://manu:KyOP1JrHoErqQILt@cluster0-g8eu9.mongodb.net/products_test?retryWrites=true&w=majority';
const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);  //tell which server we want to connect to 

  try {   //connect server
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) { //catch error if connection fails
    return res.json({message: 'Could not store data.'});
  };
  client.close(); //close the connection!

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);  //tell which server we want to connect to 

  let products;

  try {
    await client.connect(); //connect to the server
    const db = client.db(); //connect to the database
    products = await db.collection('products').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve products.'});
  };
  client.close(); //close the connection!

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
 

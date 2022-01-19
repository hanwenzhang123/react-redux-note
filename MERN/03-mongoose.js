//what is MongoDB?
- a NoSQL database which stores documents in collections (instead of record in tables as in SQL)
- stores application data (users, places)
- enforces no data schema or relations
- easily connected to node/express (not to react)
- a powerful database which can easily be integrated into a node/express environment

npm i mongodb

//What is Mongoose?
- a popular library for MongoDB
- mongoose use schema - allow you to define the structure of the documents you want

npm i moongoose

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

  res.json(newProduct); //response as json data 
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

  res.json(products);   //get the products as the response
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
 

//Mongoose
//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');

const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

app.listen(3000);

//mongoose.js
const mongoose = require('mongoose');

const Product = require('./models/product');  //require the model

mongoose.connect(   //connect to the database, return a promise, we can chain the then logic
  'mongodb+srv://manu:KyOP1JrHoErqQILt@cluster0-g8eu9.mongodb.net/products_test?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({  //create a new product based on the schema logics
    name: req.body.name,
    price: req.body.price
  });
  console.log(createdProduct);  //the _id will be added automatically
  const result = await createdProduct.save(); //save function, no needs to worry things like insertOne
  console.log(typeof createdProduct._id); //typeof createdProduct - project; typeof createdProduct._id - string; unique ID added automatically
  res.json(result);   //response in json pass with our result
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec(); //turn into real promise by adding .exec(), like toArray in MongoDB
  res.json(products);   //return response with products in our database
}

exports.createProduct = createProduct;

//models/product
const mongoose = require('mongoose'); //require mongoose

const productSchema = new mongoose.Schema({ //Schema like the blueprint, constructor function
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

  module.exports = mongoose.model('Product', productSchema);  //model builds up our blueprint
 

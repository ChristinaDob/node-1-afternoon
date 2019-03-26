const express = require('express');
const getProducts = require('./getProducts');
// The handler should be required from a file called getProduct.js
const getProduct = require('./getProduct');

const app = express();

const PORT = 4000;

app.get('/api/products', getProducts);

// use the GET method as a path that uses a parameter called id

// To tell the path to expect a parameter, append /:id to the end

// An endpoint consists of a Method, Path, and Handler
app.get('/api/product/:id', getProduct);

app.listen(PORT, () => {
  console.log(`My server is listening on port: ${PORT}`);
});

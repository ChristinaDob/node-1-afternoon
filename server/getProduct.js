const products = require('../products.json');

// Remember, any function that's used on an express method (represented as app) will receive req and res by default

// It should use req.params to find the item with the matching id in our products array

// Note: req.params will be a string and the id we're checking against is a number. ** Use parseInt **
const getProduct = (req, res, next) => {
  const item = products.find(value => value.id === parseInt(req.params.id));
  if (!item) {
    // If it is (!)not in the array, it should send a status of 500 with a message, Item not in list
    return res.status(500).send('Item not in list');
  }
  // // If the item is in the array, send it back to the client
  res.status(200).send(item);
};

module.exports = getProduct;

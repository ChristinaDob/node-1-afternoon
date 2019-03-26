// Remember to require products.json into our getProducts file so it's in scope

const products = require('../products.json');

const getProducts = (req, res, next) => {
  // Add a conditional before sending the products that checks if there's a property called price on the req.query object
  if (req.query.price) {
    // If there is, filter through the products array and send any items that cost more or the same as the provided price
    const items = products.filter(
      // Remember, query values are received as strings and the prices in our objects are numbers, use parseInt().
      value => value.price >= parseInt(req.query.price)
    );
    return res.status(200).send(items);
  }
  // If there is no price property on req.query, send all the products
  res.status(200).send(products);
};

module.exports = getProducts;

const router = require('express').Router();
const cartRouter = require('./cart');
const productsRouter = require('./products');


// ALL METHODS /api/products
router.use('/products', productsRouter);

// ALL METHODS /api/cart
router.use('/cart', cartRouter);

module.exports = router;
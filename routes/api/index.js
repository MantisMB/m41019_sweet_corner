const router = require('express').Router();
const cartRouter = require('./cart');
const productsRouter = require('./products');
const withCart = require('../../middleware/with_cart')

// ALL METHODS /api/products
router.use('/products', productsRouter);

// ALL METHODS /api/cart
router.use('/cart', withCart, cartRouter);

module.exports = router;
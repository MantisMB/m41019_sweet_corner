const router = require('express').Router();

const productsRouter = require('./products');

router.use('/products', productsRouter);

module.exports = router;
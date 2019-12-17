const router = require('express').Router();
const itemsRouter = require('./items');
const getCart = require('./get_cart')

// Routes for /api/cart

// GET /api/cart
router.get('/', getCart);

//Routes for /api/cart/items
router.use('/items', itemsRouter);

module.exports = router;


const router = require('express').Router();
const addItemToCart = require('./add_to_cart');

// Routes for /api/cart/items

// POST request to /api/cart/items/:product_id

router.post('/:product_id', addItemToCart);

module.exports = router;

const router = require('express').Router();
const itemsRouter = require('./items');

// Routes for /api/cart

//Routes for /api/cart/items
router.use('/items', itemsRouter);

module.exports = router;


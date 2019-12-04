const router = require('express').Router();

// Same as above
// const express = require('express');
// const router = express.Router();

const getAllProducts = require('./get_all');

const getProductDetails = require('./get_details');

router.get('/', getAllProducts);

router.get('/', getProductDetails);

module.exports = router;
const router = require('express').Router();
const Service = require('../services/product-functionality');

router.get('/', Service.getProducts);
router.post('/', Service.createProduct);

module.exports = router;
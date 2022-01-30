const router = require('express').Router();
const Service = require('../services/product-functionality');

router.get('/', Service.getProducts);
router.post('/', Service.createProduct);
router.patch('/:id', Service.editProduct);
router.delete('/:id', Service.deleteProduct);

module.exports = router;
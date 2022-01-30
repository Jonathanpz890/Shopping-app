const router = require('express').Router();
const Service = require('../services/sale-functionality');

router.get('/', Service.getSales);
router.post('/', Service.createSale);

module.exports = router;
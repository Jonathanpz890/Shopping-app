const router = require('express').Router();
const productRoutes = require('./productRoutes');
const saleRoutes = require('./saleRoutes');


router.use('/product', productRoutes);
router.use('/sale', saleRoutes);

module.exports = router;
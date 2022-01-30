const router = require('express').Router();
const productRoutes = require('./productRoutes');


router.use('/product', productRoutes);

module.exports = router;
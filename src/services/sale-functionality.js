const Sale = require('../entities/models/sale');


module.exports = {
    getSales: async (req, res) => {
        const sales = await Sale.find()
        return res.status(200).json({
            data: sales
        });
    },

    createSale: async (req, res) => {
        try {
            const { product, date } = req.body;
            const sale = new Sale({ product, date });
            await sale.save();
            return res.status(200).json({ data: sale, message: 'success' })
        } catch (error) {
            return res.status(400).json({ error })
        }
    }
}
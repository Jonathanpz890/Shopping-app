const Product = require('../entities/models/product');


module.exports = {
    getProducts: async (req, res) => {
        const products = await Product.find()
        return res.status(200).json({
            data: products
        });
    },

    createProduct: async (req, res) => {
        try {
            console.log(req.body)
            const { title, price, description, image } = req.body;
            const product = new Product({ title, price, description, image });
            await product.save();
            return res.status(200).json({ data: product, message: 'success' })
        } catch (error) {
            return res.status(400).json({ error })
        }
    },

    editProduct: async (req, res) => {
        try {
            const params = {}
            for (let key in req.body) params[key] = req.body[key]
            if (Object.keys(params).length)
                await Product.updateOne({ _id: req.params.id }, {
                    $set: params
                })
            return res.status(200).json({ message: 'success' });
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const deleted = await Product.deleteOne({_id: req.params.id});
            console.log(deleted);
            if (deleted.deletedCount > 0) {
                return res.status(200).json({message: 'success'})
            } else {
                return res.status(404).json({message: 'Product not found'});
            }
        } catch(error) {
            return res.status(404).json({message: 'Product not found'})
        }
    }
}
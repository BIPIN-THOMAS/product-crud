const product=require('../model/productModel')
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundProduct = await product.findById(id);
        if (!foundProduct) {
            return res.status(404).json({ error: true, status: "failure", message: "Product not found" });
        }
        return res.status(200).json({ error: false, status: "success", data: foundProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, status: "failure", message: "Server Error" });
    }
};

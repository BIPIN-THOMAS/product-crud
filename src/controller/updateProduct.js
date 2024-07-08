const product=require("../model/productModel")
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productname, price, description, image } = req.body;

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ error: true, status: "failure", message: "Product not found" });
        }

        // Updating the product fields
        existingProduct.productname = productname || existingProduct.productname;
        existingProduct.price = price || existingProduct.price;
        existingProduct.description = description || existingProduct.description;
        existingProduct.image = image || existingProduct.image;

        const updatedProduct = await existingProduct.save();
        return res.status(200).json({ error: false, status: "success", message: "Product updated", data: updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, status: "failure", message: "Server Error" });
    }
};

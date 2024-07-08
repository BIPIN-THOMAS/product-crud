const product=require('../model/productModel')
exports.createProduct = async (req, res) => {
    console.log("reqbody=", req.body);
    const {productname,price,description,image}= req.body;
    try {
        const existingProduct=await product.findOne({productname});
        if(existingProduct){
         res.status(400).json({error: true,status:"failer", message: "product  already available" });
          return
        }
    // const {productname,price,description}= req.body;
        const newsproduct=new product({productname,price,description});
        await newsproduct.save()
        return res.status(200).json({ error: false,status:"success", message: "product added", data: newsproduct })
        }
        
     catch(error) {
        console.log(error);
         res.status(400).json({ error: true,status:"false", message: "Server Error" });
    }
  };



  //Get Product by id

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

// Update Product

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


  

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
  

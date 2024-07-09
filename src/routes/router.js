const express=require('express')

const product= require("../controller/productController"); 


const router=express.Router()


router.post("/create_Product",product.createProduct);
router.put("/getProductbyid/:id", product.getProductById);
router.put("/update_Product/:id", product.updateProduct);


module.exports=router;
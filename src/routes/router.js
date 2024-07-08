const express=require('express')

const product= require("../controller/productController"); 


const router=express.Router()


router.post("/create_Product",product.createProduct);
router.put("/getProductby_id", product.getProductById);
router.put("/update_Product", product.updateProduct);


module.exports=router;
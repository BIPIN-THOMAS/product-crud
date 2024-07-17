const express=require('express')

const product= require("../controller/productController"); 


const router=express.Router()


router.post("/create_Product",product.createProduct);
router.get("/getProductbyid/:id", product.getProductById);
router.put("/update_Product/:id", product.updateProduct);
router.delete("/delete_Product/:id", product.deleteProduct);
router.get("/getall_Product", product.getAllProducts);




module.exports=router;
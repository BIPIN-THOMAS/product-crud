const express=require('express')

const product= require("../controller/productController"); 


const router=express.Router()


router.get("/create_product",product.createProduct);

module.exports=router;
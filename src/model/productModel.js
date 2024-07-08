const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    productname:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
       // require:true
    }

})
const product=mongoose.model('product',productSchema)
module.exports=product
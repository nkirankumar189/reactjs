const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
        "_id":{type:String,required:true},
        "name":{type:String,required:true},
        "brand":{type:String,required:true},
        "rating":{type:Number,required:true},
        "numReviews":{type:Number,required:true},
        "description":{type:String,required:true},
        "image":{type:String,required:true}
        
});
     const product= mongoose.model("product",productSchema);
     module.exports=product;

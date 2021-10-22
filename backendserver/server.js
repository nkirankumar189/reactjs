const express = require("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const product = require("./model/product");

const app=express();
app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@majorproject.9yrsk.mongodb.net/ecommerce?retryWrites=true&w=majority',(err)=>{
       if(err) throw err;
       
       else{
           console.log('connection success');
       }
});

// app.get('/api/products',async(req,res)=>{
//     try{
//             const product= await product.find();
//             res.send(product);
//     }catch{
//         console.log(err.message)
//     }
// });
app.get('/getbrand', async (req,res)=>{

    try{
        const alldata = await product.find();
        return res.json(alldata);

    }catch(err){
        console.log(err.message)
    }
})

app.listen(8080,()=>{
    console.log("server listening the port number 1234")
});
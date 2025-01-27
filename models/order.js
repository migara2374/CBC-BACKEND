import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderId : {
        type : String,
        required : true,
        unique : true 
    },
    email : {
        type : String, 
        required : true 
    },
    orderedItems : [{
        name : String, 
        required : true 
    }],
    quantity : {
        type : Number,
        required : true 
    },
    image : {
        type : String,
        required : true 
    },
    date : {
        type : Date,
        default : Date.now 
    }, 
    paymentId:{
        type : String,
        required : true 
    }
})
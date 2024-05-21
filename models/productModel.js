const mongoose = require('mongoose')

const productScema= mongoose.Schema(
    {
        name:{type: String,
            required: [true, "Please enter a product name "]
        },
        price:{
            type: Number,
            required: [true, "Please enter a product price "],
           // default:0,
        },
        quantity:{
            type: Number,   
            required: true,
        },
        image:{
            type: String,
            required:false,
        }
    },
    {
        timestamp: true,
    },
)

const Product = mongoose.model('product',productScema);

module.exports = Product;
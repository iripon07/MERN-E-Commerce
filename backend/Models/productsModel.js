const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
<<<<<<< HEAD
<<<<<<< HEAD
        trim: true,
        maxLength:[100, "Product name can not exceed 100 characters"],
=======
        trim: true
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
        trim: true
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Name"],
        maxLength: [8, "Price can not exceed 8 characters"],
<<<<<<< HEAD
<<<<<<< HEAD
        maxLength: [5, "Product price can not exceed 5 digits"],
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    },
    ratings: {
        type: Number,
        default: 0
<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    },

    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        },
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"],
    },

    Stock: {
        type: Number,
<<<<<<< HEAD
<<<<<<< HEAD
        required: [true, "Please Enter Product Stock"],
        default: 0,
=======
        default: 1
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
        default: 1
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews:[
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },

    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);
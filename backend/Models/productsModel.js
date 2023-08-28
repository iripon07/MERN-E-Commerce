const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true,
        maxLength: [100, "Product name can not exceed 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],

    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Name"],
        maxLength: [8, "Price can not exceed 8 characters"],
        maxLength: [5, "Product price can not exceed 5 digits"],
        default: 0,
    },
    ratings: {
        type: Number,
        default: 0,
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
        required: [true, "Please Enter Product Stock"],
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
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

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);
const Product = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError")

//Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

//Get All Products
exports.getAllProducts = catchAsyncErrors( async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    });
});

//Get Product Details 
exports.getProductDetails = catchAsyncErrors(async(req, res, next) => {
    const product =await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success:true,
        product
    })
})

//Update Product --admin
exports.updateProduct = catchAsyncErrors(async ( req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product,
    })
});

//Delete Product 
exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    } 
    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:"Product delete successfully"
    })
})


const Product = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const apiFeatures = require("../utils/apiFeatures");

//Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

//Get All Products
<<<<<<< HEAD
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
=======
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    const apiFeature = new apiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products,
<<<<<<< HEAD
        productsCount,
=======
        productCount
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    });
});

//Get Product Details 
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
<<<<<<< HEAD
        product,
=======
        product
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    })
})

//Update Product --admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
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
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    await product.deleteOne();
    res.status(200).json({
        success: true,
        message: "Product delete successfully"
    })
});


//Create New review and update the reviews 
exports.createProductReview = catchAsyncErrors (async(req, res, next) => {
    const {rating, comment, productId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Name(rating),
        comment,
    }

    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find( (rev) => rev.user.toString() === req.user._id.toString());
    if(isReviewed){
        product.reviews.forEach( (rev) => {
            if(rev.user.toString() === req.user._id.toString())
               rev.rating = rating, rev.comment = comment 
        })

    }else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.ratings = product.reviews.forEach(rev => {avg += rev.rating});
    product.ratings = avg / product.reviews.length;


    await product.save({validateBeforeSave});
    res.status(200).json({
        success: true,
    });
});

//Get All reviews of a product
exports.getProductReviews = catchAsyncErrors( async(req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if(!product){
        return next( new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success:true,
        reviews:product.reviews,
    })
})

//Delete Reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    const reviews = product.reviews.filter((rev) => rev._id.toString() === req.query.id.toString());

    let avg = 0;
    reviews.forEach( rev => { avg += rev.rating});

    const ratings = avg / reviews.length;
    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews,
    },
    {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
})






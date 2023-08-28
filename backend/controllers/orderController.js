const Order = require("../Models/orderModel");
const Product = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

<<<<<<< HEAD
<<<<<<< HEAD
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
=======
exports.newOrder = catchAsyncErrors( async( req, res, next) => {
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
exports.newOrder = catchAsyncErrors( async( req, res, next) => {
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
<<<<<<< HEAD
<<<<<<< HEAD
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        order
    });
});

//Get Single Order 
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
     } = req.body;

     const order = await Order.create({
         shippingInfo,
         orderItems,
         paymentInfo,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
         paidAt: Date.now(),
         user: req.user._id,
     });

     res.status(201).json({
        success: true,
        order
     });
});

//Get Single Order 
exports.getSingleOrder = catchAsyncErrors( async( req, res, next) => {
<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
<<<<<<< HEAD
<<<<<<< HEAD
    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
=======
    if(!order){
        return next( new ErrorHandler("Order not found with this Id", 404));
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
    if(!order){
        return next( new ErrorHandler("Order not found with this Id", 404));
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    };
    res.status(200).json({
        success: true,
        order,
    });
});


//Get Logged in user Orders
<<<<<<< HEAD
<<<<<<< HEAD
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
=======
exports.myOrders = catchAsyncErrors( async( req, res, next) =>{ 
    const orders = await Order.find({user: req.user._id});
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
exports.myOrders = catchAsyncErrors( async( req, res, next) =>{ 
    const orders = await Order.find({user: req.user._id});
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    res.status(200).json({
        success: true,
        orders,
    });
});

//Get All Orders -Admin
<<<<<<< HEAD
<<<<<<< HEAD
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;
    orders.forEach((order) => {
=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
exports.getAllOrders = catchAsyncErrors( async (req, res, next) =>{
    const orders = await Order.find();

    let totalAmount = 0;
    orders.forEach(( order ) => {
<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
        totalAmount += order.totalPrice;
    });
    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});

//Update Order Status --Admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHandler("You have already delivered this order", 400));
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (o) => {
            await updateStock(o.product, o.quantity);
        });
    }
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
});

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}

//Delete Order --Admin

<<<<<<< HEAD
<<<<<<< HEAD
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
=======
exports.deleteOrder = catchAsyncErrors(async( req, res, next) => {
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
exports.deleteOrder = catchAsyncErrors(async( req, res, next) => {
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    };
    await order.remove();
    res.status(200).json({
        success: true,
    })
})


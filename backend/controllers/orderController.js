const Order = require("../Models/orderModel");
const Product = require("../Models/productsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const apiFeatures = require("../utils/apiFeatures");

exports.newOrder = catchAsyncErrors( async( req, res, next) => {
    const {
        shippingInfo,
        orderItem,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
     } = req.body;

     const order = await Order.create({
         shippingInfo,
         orderItem,
         paymentInfo,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
         paidAt: Date.now,
         user: req.user._id,
     });

     res.status(201).json({
        success: true,
        order
     });
});
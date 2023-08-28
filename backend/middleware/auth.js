const catchAsyncError = require("./catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require('jsonwebtoken');
const User = require("../Models/userModel");


exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resources", 401));
    };
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decodedData);
    req.user = await User.findById(decodedData.id);
    next();
});

exports.authorizedRoles = (...roles) => {
    return  (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(
            new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resources`, 403)
            )
    
        }
        next();
    }
}
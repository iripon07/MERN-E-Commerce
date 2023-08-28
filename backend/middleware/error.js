<<<<<<< HEAD
const ErrorHandler = require("../utils/errorHandler");
=======
const ErrorHandler = require("../utils/errorHandler"); 
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

<<<<<<< HEAD
    // Wrong Mongodb Id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    
    //Mongoose Duplicate Key Error
    if (err.code === 11000) {
=======
    //Wrong Mongodb Id Error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    //Mongoose Duplicate Key Error
    if(err.code === 11000){
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
        const message = `Duplicate ${Object.keys(err.keyValue)} Enter`
        err = new ErrorHandler(message, 400);

    }

    //Wrong JWT Error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, try again`;
        err = new ErrorHandler(message, 400);
    }

    //Wrong Expire Error
    if (err.name === "TokenExpireError") {
        const message = `Json Web Token is expired, try again`;
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}


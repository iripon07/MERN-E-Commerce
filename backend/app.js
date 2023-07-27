const express = require('express')
const cookieParser = require('cookie-parser');
const errorMiddleware = require("./middleware/error")

const app = express();

app.use(express.json());
app.use(cookieParser());


//Route Import
const products = require("./routes/productRoute");
const user = require("./routes/userRoute");


app.use("/api/v1", products);
app.use("/api/v1", user);

//Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
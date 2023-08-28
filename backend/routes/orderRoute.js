const express = require('express')
const router = express.Router()
<<<<<<< HEAD
<<<<<<< HEAD
const {

    isAuthenticatedUser,
    authorizedRoles

} = require('../middleware/auth');
const {

    newOrder,
    myOrders,
    getSingleOrder,
    getAllOrders,
    updateOrder,
    deleteOrder
=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
const { 

    isAuthenticatedUser, 
    authorizedRoles 

} = require('../middleware/auth');
const { 

    newOrder, 
    myOrders, 
    getSingleOrder, 
    etAllOrders, 
    updateOrder, 
    deleteOrder 
<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2

} = require('../controllers/orderController');

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, authorizedRoles("admin"), getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router.route("/admin/orders").get(isAuthenticatedUser, authorizedRoles("admin"), getAllOrders);

router.route("/admin/order/:id")
<<<<<<< HEAD
<<<<<<< HEAD
    .put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder)
    .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder);
=======
.put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder)
.delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder);
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
.put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder)
.delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder);
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2

module.exports = router
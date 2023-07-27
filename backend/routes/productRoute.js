const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productControllers');
const { isAuthenticatedUser, authorizedRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/products").get( getAllProducts);
router.route("/product/new").post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);
router.route("/product/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router;
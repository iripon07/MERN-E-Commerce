import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
<<<<<<< HEAD
<<<<<<< HEAD
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
=======
    CLEAR_ERRORS
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
    CLEAR_ERRORS
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
} from "../constants/productConstants";


export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
<<<<<<< HEAD
<<<<<<< HEAD
                products: [],
=======
                product: [],
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
                product: [],
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
<<<<<<< HEAD
<<<<<<< HEAD
                products: action.payload.products,
                productsCount: action.payload.productsCount,
=======
                product: action.payload.products,
                productsCount: action.payload.products.productsCount,
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
                product: action.payload.products,
                productsCount: action.payload.products.productsCount,
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
<<<<<<< HEAD
<<<<<<< HEAD
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
=======
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
                error: null,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:action.payload,
            }

        default:
            return state;
    }

<<<<<<< HEAD
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
};
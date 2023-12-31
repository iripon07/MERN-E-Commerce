import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
    productDetailsReducer,
    productsReducer
} from './reducers/productReducer';
import {
    forgotPasswordReducer,
    profileReducer,
    userReducer
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,

});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? 
        JSON.parse(localStorage.getItem("cartItems"))
        : [],
    }
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


import { 
    createStore, 
<<<<<<< HEAD
    combineReducers, 
    applyMiddleware 
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
=======
    applyMiddleware, 
    combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    products: productsReducer,
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2

});

let initialState = {};
const middleware = [thunk];
<<<<<<< HEAD

=======
>>>>>>> 19ab5c5e7635e56816be3a31c37500aa7170adb2
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
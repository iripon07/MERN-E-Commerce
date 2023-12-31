import axios from "axios";
import { ADD_TO_CART } from "../constants/cartConstant";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    console.log(data);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.Stock,
            quantity,
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().charAt.cartItems));
}
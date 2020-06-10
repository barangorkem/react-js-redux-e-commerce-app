
import {ADD_PRODUCT_CART,DELETE_PRODUCT_CART,SET_LOADING} from '../actions/carts';

const initialState = {
 carts: [],
 isLoading:false
}


export default(state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART: {
            return {
                ...state,
                carts:action.payload,
                isLoading:false
            }
        }
        case DELETE_PRODUCT_CART: {
            return {
                ...state,
                carts:action.payload,
                isLoading:false
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading:action.payload
            }
        }
        default:
            {
                return state;
            }
    }
}

export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";

export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";

export const SET_LOADING = "SET_LOADING";


export function addProductToCart(carts, product) {


    for (let i = 0; i < carts.length; i++) {
        if (carts.find(x => x.id == product.id) != null) {
            alert("Bu ürün kartta bulunmakta");
            return dispatch => {
                return dispatch({type: "ADD_PRODUCT_CART", payload: carts})
            }
        }
    }
    carts.push(product);
    
    return dispatch => {
        return dispatch({type: "ADD_PRODUCT_CART", payload: carts})
    }


}

export function deleteToCart(carts, product) {

    carts = carts.filter(x => x.id != product.id);
    return dispatch => {
        return dispatch({type: "DELETE_PRODUCT_CART", payload: carts})
    }


}

export function setLoading(value) {

    console.log("value",value);

    return dispatch => {
        return dispatch({type: "SET_LOADING", payload: value})
    }
}

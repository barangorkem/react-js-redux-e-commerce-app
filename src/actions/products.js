


export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const NOT_FILTER_PRODUCTS = "NOT_FILTER_PRODUCTS";

export function orderProducts(key) {
    return dispatch => {
        return dispatch({
        type:"ORDER_PRODUCTS",
        payload:key
        })
    }
}

export function filterProducts(value,categories,products) {

    if(categories.indexOf(value)!=-1 ) {
        categories = categories.filter(t=>t!=value);
    }
    else {
        categories.push(value);
    }

    let newProducts=[];

    for(let i=0;i<products.length;i++) {
        if(categories.indexOf(products[i].categoryId.toString())!=-1) {
            newProducts.push(products[i]);
        } 
    }

    if(categories.length==0) {
        return dispatch => {
            return dispatch({
            type:"NOT_FILTER_PRODUCTS",
            payload:{
                categories:categories
            }
            })
        }
    }
    else {
        return dispatch => {
            return dispatch({
            type:"FILTER_PRODUCTS",
            payload:{
                categories:categories,
                products:newProducts
            }
            })
        }
    }

 
}
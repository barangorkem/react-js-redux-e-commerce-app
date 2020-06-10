import {ORDER_PRODUCTS,FILTER_PRODUCTS,NOT_FILTER_PRODUCTS} from '../actions/products';

const initialState = {
    products: [
        {
            id: 1,
            title: "Ürün1",
            price: 100.0,
            image: "https://i.picsum.photos/id/43/500/325.jpg",
            categoryId:1
        },
        {
            id: 2,
            title: "Ürün2",
            price: 200.0,
            image: "https://i.picsum.photos/id/44/500/325.jpg",
            categoryId:2
        },
        {
            id: 3,
            title: "Ürün3",
            price: 300.0,
            image: "https://i.picsum.photos/id/46/500/325.jpg",
            categoryId:3
        },
        {
            id: 4,
            title: "Ürün4",
            price: 400.0,
            image: "https://i.picsum.photos/id/47/500/325.jpg",
            categoryId:2
        }, {
            id: 5,
            title: "Ürün5",
            price: 500.0,
            image: "https://i.picsum.photos/id/48/500/325.jpg",
            categoryId:1
        }, {
            id: 6,
            title: "Ürün6",
            price: 600.0,
            image: "https://i.picsum.photos/id/49/500/325.jpg",
            categoryId:3
        }, {
            id: 7,
            title: "Ürün7",
            price: 700.0,
            image: "https://i.picsum.photos/id/50/500/325.jpg",
            categoryId:2
        }, {
            id: 8,
            title: "Ürün8",
            price: 800.0,
            image: "https://i.picsum.photos/id/51/500/325.jpg",
            categoryId:3
        },
    ],
    not_filter_products: [
        {
            id: 1,
            title: "Ürün1",
            price: 100.0,
            image: "https://i.picsum.photos/id/43/500/325.jpg",
            categoryId:1
        },
        {
            id: 2,
            title: "Ürün2",
            price: 200.0,
            image: "https://i.picsum.photos/id/44/500/325.jpg",
            categoryId:2
        },
        {
            id: 3,
            title: "Ürün3",
            price: 300.0,
            image: "https://i.picsum.photos/id/46/500/325.jpg",
            categoryId:3
        },
        {
            id: 4,
            title: "Ürün4",
            price: 400.0,
            image: "https://i.picsum.photos/id/47/500/325.jpg",
            categoryId:2
        }, {
            id: 5,
            title: "Ürün5",
            price: 500.0,
            image: "https://i.picsum.photos/id/48/500/325.jpg",
            categoryId:1
        }, {
            id: 6,
            title: "Ürün6",
            price: 600.0,
            image: "https://i.picsum.photos/id/49/500/325.jpg",
            categoryId:3
        }, {
            id: 7,
            title: "Ürün7",
            price: 700.0,
            image: "https://i.picsum.photos/id/50/500/325.jpg",
            categoryId:2
        }, {
            id: 8,
            title: "Ürün8",
            price: 800.0,
            image: "https://i.picsum.photos/id/51/500/325.jpg",
            categoryId:3
        },
    ],
    productOrders: [
        
        {
            key: "none",
            value: "Yok"
        },
        {
            key: "titleasc",
            value: "İsim Artan"
        }, {
            key: "titledesc",
            value: "İsim Azalan"
        }, {
            key: "priceasc",
            value: "Fiyat Artan"
        }, {
            key: "pricedesc",
            value: "Fiyat Azalan"
        }
    ],
    productFilters:{
        categories:[{
            id:1,
            value:"Kadın"
        },
        {
            id:2,
            value:"Erkek",
        },
        {
            id:3,
            value:"Çocuk",
        },
    ]
},
categories:[]
}


export default(state = initialState, action) => {
    switch (action.type) {
        case ORDER_PRODUCTS:
            {
                switch (action.payload) {
                    case "titleasc":
                        {
                            return {
                                ...state,
                                products:state.products.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

                            }
                        }
                    case "titledesc":
                        {
                            return {
                                ...state,
                                products:state.products.sort((a,b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
                            }
                        }
                    case "priceasc":
                        {
                            return {
                                ...state,
                                products:state.products.sort((a, b) => Number(a.price) - Number(b.price))
                            }
                        }
                    case "pricedesc":
                        {
                            return {
                                ...state,
                                products:state.products.sort((a, b) => Number(b.price) - Number(a.price))
                            }
                        }
                    default:
                        return {
                            ...state,
                            products:state.products.sort((a, b) => Number(a.id) - Number(b.id))
                        };
                }

            }
        case FILTER_PRODUCTS: {
            return {
                ...state,
                categories:action.payload.categories,
                products:action.payload.products
            }
        }
        case NOT_FILTER_PRODUCTS: {
            return {
                ...state,
                categories:action.payload.categories,
                products:state.not_filter_products
            }
        }
        default:
            {
                return state;
            }
    }
}

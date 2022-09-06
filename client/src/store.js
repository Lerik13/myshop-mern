import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

// get cart Items from Local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

const preloadedState = {
	cart: {cartItems: cartItemsFromStorage},
}

const store = configureStore({
	reducer: {
		productList: productListReducer,
		productDetails: productDetailsReducer,
		cart: cartReducer
	},
	preloadedState,
	devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
})

export default store
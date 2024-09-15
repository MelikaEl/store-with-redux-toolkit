import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,//cartReducer automatically generated when we generate cartSlice file
        modal:modalReducer,
    },
})
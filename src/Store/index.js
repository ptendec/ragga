import {configureStore} from "@reduxjs/toolkit"
import userReducer from './user/reducer'
import cartReducer from './cart/reducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    }
})


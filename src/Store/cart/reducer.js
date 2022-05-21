import {createSlice} from "@reduxjs/toolkit"
import fetchIntercept from "../../API/fetchIntercept"
import {useDispatch, useSelector} from "react-redux"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    foods: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.foods.push(action.payload)
    },
    changeItemAmountCart: (state, action) => {
      state.foods = state.foods.map(item => {
        if (item.id === action.payload.id) {
          return {...item, amount: action.payload.value}
        } else {
          return item
        }
      })
    },
    deleteItemFromCart: (state, action) => {
      state.foods = state.foods.filter(dish => dish.id !== action.payload.id)
    },
    deleteAllItemsFromCart: (state, action) => {
      state.foods = []
    }
  }
})

export const {setItemInCart, deleteItemFromCart, deleteAllItemsFromCart, changeItemAmountCart} = cartSlice.actions
export default cartSlice.reducer


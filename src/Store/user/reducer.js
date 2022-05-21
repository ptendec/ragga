import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true
      state.user = action.payload
    },
    removeUser: (state, action) => {
      state.isAuth = false
      state.user = {}
    },
  }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer


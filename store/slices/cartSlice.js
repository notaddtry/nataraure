import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isSubmitted: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        )
        state.items.splice(index, 1)
      } else {
        item.quantity--
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      state.items.splice(index, 1)
    },
    deleteCart: (state) => {
      state.items.length = 0
    },
    editSubmitForm: (state, action) => {
      state.isSubmitted = action.payload
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  deleteCart,
  editSubmitForm,
} = cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addItem: (state, action) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        item => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.cart.find(
        item => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find(
        item => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
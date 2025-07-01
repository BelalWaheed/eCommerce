import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  loading: false,
  viewProduct: {},
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setViewProduct: (state, { payload }) => {
      state.viewProduct = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    addProduct: (state, { payload }) => {
      const productInCart = state.cart.find((item) => item.id === payload.id);

      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },

    increaseN: (state, { payload }) => {
      const productInCart = state.cart.find((item) => item.id === payload.id);

      if (productInCart) {
        productInCart.quantity += 1;
      }
    },

    decreaseN: (state, { payload }) => {
      const productInCart = state.cart.find((item) => item.id === payload.id);

      if (productInCart && productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      }
    },
  },
});
export const products = productsSlice.reducer;
export const {
  addProduct,
  setProducts,
  increaseN,
  decreaseN,
  removeFromCart,
  setLoading,
  setViewProduct,
} = productsSlice.actions;

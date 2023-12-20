import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const products = JSON.parse(localStorage.getItem('basket')) || []


const initialState = {
  basket: products,
  count: products.length,
  loading: false,
  error: "",
};

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addInBasket: (state, action) => {
        const { id, size, quantity } = action.payload;
        const existingProduct = state.basket.find(product => product.id === id && product.size === size);
        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          state.basket = [...state.basket, action.payload];
        }
        state.count += quantity
        localStorage.setItem('basket', JSON.stringify(state.basket));
      },
      deleteItem: (state, action) => {
        state.basket = state.basket.filter(item => item.cardId !== action.payload.cardId)
        localStorage.setItem('basket', JSON.stringify(state.basket));
        state.count -= action.payload.quantity
      },
      resetBasket: (state) => {
        state.basket = [];
        localStorage.setItem('basket', JSON.stringify([]));
        state.count = 0
      }
  },
});

export const { addInBasket, deleteItem, resetBasket } = BasketSlice.actions;
export default BasketSlice.reducer;

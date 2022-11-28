import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
    },
    setFilteredProducts: (state) => {
      state.filteredProducts = [...state.products];
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.totalPrice += newItem.price;
      const existingItem = state.cart.find((pro) => pro.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cart.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          title: newItem.title,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const prodID = action.payload;
      const delItem = state.cart.find((item) => item.id === prodID);
      state.totalPrice -= delItem.price;
      if (delItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== delItem.id);
      } else {
        delItem.quantity--;
      }
      state.totalQuantity--;
    },
    filterProducts: (state, action) => {
      if (action.payload === "all") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
    filterBySearch: (state, action) => {
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload)
      );
    },
    sortByPrice: (state, action) => {
      if (action.payload === "low") {
        state.filteredProducts.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (action.payload === "high") {
        state.filteredProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    reset: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice;

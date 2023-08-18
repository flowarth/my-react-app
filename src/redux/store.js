import { configureStore } from "@reduxjs/toolkit";
import cardReduser from "./slice/cartSlice.js";

const store = configureStore({
    reducer: {
        cart: cardReduser,
    }
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("store change : ", store.getState());
});

export default store;
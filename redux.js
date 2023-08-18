// reducer

import {legacy_createStore} from "redux";

const cartReducer = (
    state = {
        cart: [],
    },
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
}

// store

const store = legacy_createStore(cartReducer);

// subscribe
store.subscribe(() => {
    store.getState();
});

// dispatch
const action_add_to_cart = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action_add_to_cart);
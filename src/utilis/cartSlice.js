import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["Pizza", "Burger"]
    }, 
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items = [];
        },
    }
})

export const { addItems, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
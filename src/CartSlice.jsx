import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: []
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.id!==action.payload
            );
        },
        increaseQuantity: (state,action) => {
            const item=state.items.find(
                item => item.id===action.payload
            );
            item.quantity+=1;
        },
        decreaseQuantity: (state,action) => {
            const item=state.items.find(
                item => item.id===action.payload
            );
            if(item.quantity>1) {
                item.quantity-=1;
            }
        }
    }
});

export const {
    addItem, removeItem, increaseQuantity, decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
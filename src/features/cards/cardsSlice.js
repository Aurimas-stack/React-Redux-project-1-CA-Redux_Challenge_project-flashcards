import { createSlice } from "@reduxjs/toolkit";

export const cardsSlize = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        }
    }
})

export const { addCard } = cardsSlize.actions;
export default cardsSlize.reducer;
export const selectCards = state => state.cards.cards;
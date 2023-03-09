import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cards: [{word: 'Shinga', pos: 'Verb', def: 'Binga'}],
    number: 1,
}

const cardSlice = createSlice({
    name: cards,
    initialState,
});

export default cardSlice.reducer;
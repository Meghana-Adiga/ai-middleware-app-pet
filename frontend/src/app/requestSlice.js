/*
Store for requests
@author: Meghana Adiga
*/

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prompt: "",
    targetLanguage: "",
    page: 1,
};

const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        setRequest(state, action) {
            state.prompt = action.payload.prompt;
            state.targetLanguage = action.payload.targetLanguage;
            state.page = 1; //reset to 1 for new request
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        resetRequest(state) {
            state.prompt = "";
            state.targetLanguage = "";
            state.page = 1;
        },
    }
});

export const { setRequest, setPage, resetRequest } = requestSlice.actions;

export default requestSlice.reducer;
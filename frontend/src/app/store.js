/*
Redux store
@author: Meghana Adiga
*/

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./appSlice";
import requestReducer from "./requestSlice";

export const store = configureStore({
    reducer: {
        request: requestReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

import { weatherReducer } from "./slices/weatherSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
})
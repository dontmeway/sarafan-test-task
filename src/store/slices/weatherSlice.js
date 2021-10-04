import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleChangeCurrent, handleCurrent, handleDays } from "../utils/handlers";



const initialState = {
    currentDate: {},
    days: {},
    hours: {},
    isLoading: false,
    error: null
}

export const getWeather = createAsyncThunk(
    "weather/getWeather",   
    async({key, lat, lon}, thunkApi) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
            return data
        } catch(err) {
            thunkApi.rejectWithValue(err)
        }
    }
)





const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    reducers: {
        changeCurrent: (state, { payload }) => {
            state.currentDate = handleChangeCurrent(payload)
        }
    },
    extraReducers: {
        [getWeather.pending]: (state) => {
            state.isLoading = true
        },
        [getWeather.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.currentDate = handleCurrent(payload.current)
            state.days = handleDays(payload.daily)

        },
        [getWeather.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        }
    }
})
export const { changeCurrent } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer

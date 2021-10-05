import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleCurrent, handleDays, handleHours } from "../utils/handlers";



const initialState = {
    currentDate: {},
    days: {},
    hours: {},
    isLoading: false,
    error: null,
    units: "metric"
}

export const getWeather = createAsyncThunk(
    "weather/getWeather",   
    async({key, lat, lon, units}, thunkApi) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`)
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
        changeUnit: (state, { payload }) => {
            state.units = payload
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
            state.hours = handleHours(payload.hourly)

        },
        [getWeather.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        }
    }
})
export const { changeCurrent, changeUnit } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer

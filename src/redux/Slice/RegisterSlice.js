import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('user/registerUser', async(data) => {
    const request = await axios.post(`${import.meta.env.VITE_BASE_URL}/register`, data);
    const response = await request.data
    return response
})

const registerSlice = createSlice({
    name:"registration",
    initialState:{
        isLoading:false,
        user:null,
        isError:false
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
            state.user = null
            state.isError = false
        })
        .addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false
            state.user = action.payload
            state.isError = false
        })
        .addCase(registerUser.rejected, (state,action) => {
            state.isLoading = false
            state.user = null
            state.isError = action.error.message
        })
    }
})

export default registerSlice.reducer
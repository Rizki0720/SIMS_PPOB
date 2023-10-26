import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('user/loginUser', async(data) =>{
    const request = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, data);
    const response = await request.data.data.token;
    localStorage.setItem('token',response);
    return response;
})


const userSlice = createSlice({
    name:"token",
    initialState:{
        user:null,
        loading:false,
        error:null,
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
            state.user = null
            state.error = null
        }).addCase(loginUser.fulfilled,(state,action) => {
            state.loading = false
            state.user = action.payload
            state.error = null
        }).addCase(loginUser.rejected,(state,action) => {
            state.loading = false
            state.user = null
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
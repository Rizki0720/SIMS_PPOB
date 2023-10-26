import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const topUp = createAsyncThunk('topUp', async(data) => {
    const token = localStorage.getItem('token')
    const request = await axios.post(`${import.meta.env.VITE_BASE_URL}/topup`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const response = request.data.data
    return response
})

const topUpSlice = createSlice({
    name:'topUp',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers:(builder) => {
        builder.addCase(topUp.pending,(state) => {
            state.loading = true
            state.data = []
            state.error = null
        }).addCase(topUp.fulfilled,(state,action) => {
            state.loading = false 
            state.data = action.payload
            state.error = null
        }).addCase(topUp.rejected,(state,action) => {
            state.loading = false 
            state.data = []
            state.error = action.error.message
        })
    }
})

export default topUpSlice.reducer

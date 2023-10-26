import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getLayanan = createAsyncThunk('layanan/getLayanan', async(token) => {
    const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/services`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const response = request.data.data
    return response
})

export const getLayananId = createAsyncThunk('layanan/getLayananId', async(service_code) => {
    const token = localStorage.getItem('token')
    const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/services`,service_code,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const response = request.data.data
    return response
})

const layananSlice = createSlice({
    name:'service',
    initialState:{
        service:[],
        loading:false,
        error:null
      
    },
    extraReducers:(builder) =>{
        builder.addCase(getLayanan.pending, (state) => {
            state.loading = true
            state.service = []
            state.error = null
        }).addCase(getLayanan.fulfilled,(state,action) => {
            state.pending = false 
            state.service = action.payload
            state.error = null
        })
        .addCase(getLayanan.rejected,(state,action) => {
            state.pending = false
            state.service = []
            state.error = action.error.message
        })
    }
})

export default layananSlice.reducer;
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const purchase = createAsyncThunk('transaction/purchase', async(data) => {
    const token = localStorage.getItem('token')
    const request = await axios.post(`${import.meta.env.VITE_BASE_URL}/transaction`,data, {
        headers:{
            Authorization: `Bearer ${token}` 
        }
    })
    const response = request.data.data
    return response
})

const transactionSlice = createSlice({
    name:'transaction',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(purchase.pending,(state) => {
            state.loading = true
            state.data = []
            state.error = null
        }).addCase(purchase.fulfilled,(state,action) =>{
            state.loading = false
            state.data = action.payload
            state.error = null
        }).addCase(purchase.rejected,(state,action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default transactionSlice.reducer
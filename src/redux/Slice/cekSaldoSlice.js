import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getSaldo = createAsyncThunk('saldo/getSaldo', async(token) => {
    const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/balance`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const response = request.data.data
    return response
})

const saldoSlice = createSlice({
    name:'balance',
    initialState:{
        balance:[],
        loading:false,
        error:null
    },
    extraReducers:(builder) => {
        builder.addCase(getSaldo.pending, (state) =>{
            state.loading = true
            state.balance = []
            state.error = null
        }).addCase(getSaldo.fulfilled,(state,action) => {
            state.loading = false
            state.balance = action.payload
            state.error = null
        }).addCase(getSaldo.rejected,(state,action) => {
            state.loading = false
            state.balance = []
            state.error = action.error.message
        })
    }
})

export default saldoSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getBanner = createAsyncThunk('banner/getBanner', async(token) => {
    const request = await axios.get(1`${import.meta.env.VITE_BASE_URL}/banner`, {
        headers:{import { getBanner } from './bannerSlice';

            Authorization:`Bearer ${token}`
        }
    })
    const response = await request.data.data
    return response
})

const bannerSlice = createSlice({
    name:'banner',
    initialState:{
        banner:[],
        loading:false,
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(getBanner.pending, (state) => {
            state.loading = true 
            state.banner = []
            state.error = false
        })
        .addCase(getBanner.fulfilled, (state,action) => {
            state.loading = false
            state.banner = action.payload
            state.error = false
        })
        .addCase(getBanner.rejected,(state,action) => {
             state.loading = false
            state.banner = []
            state.error = action.error.message
        })
    }
})


export default bannerSlice.reducer;
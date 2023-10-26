import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const updateProfile = createAsyncThunk('profile/updateProfile',async(data) => {
    const token = localStorage.getItem('token')
    const request = await axios.put(`${import.meta.env.VITE_BASE_URL}/profile/update`, data,{
         headers:{
            Authorization:`Bearer ${token}`
        }
    })
    const response = await request.data.data
    return response
})

const updateSlice = createSlice({
    name:'update',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extrareducers:(builder) => {
        builder.addCase(updateProfile.pending, (state) => {
            state.loading = true
            state.data = []
            state.error = null
        }).addCase(updateProfile.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        }).addCase(updateProfile.rejected,(state,action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default updateSlice.reducer
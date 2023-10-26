import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProfile = createAsyncThunk('profile/getProfile', async(token) => {
    const request = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    const response = await request.data.data
    return response
})



const profileSlice = createSlice({
    name:'profile',
    initialState:{
        data:[],
        loading:false,
        error:null
    },extraReducers:(builder) => {
        builder.addCase(getProfile.pending, (state) => {
            state.loading = true
            state.data = []
            state.error = null
        }).addCase(getProfile.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        }).addCase(getProfile.rejected,(state,action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

// export const {setProfile, setLoading,setError} = profileSlice.actions;
export default profileSlice.reducer
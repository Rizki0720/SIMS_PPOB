import {configureStore } from '@reduxjs/toolkit'
import bannerReducer from './Slice/bannerSlice'
import register from './Slice/RegisterSlice'
import authLogin from './Slice/LoginSlice'
import layanan from './Slice/layananSlice'
import profileUser from './Slice/ProfileSlice'
import updateProfile from './Slice/updateProfileSlice'
import cekSaldo from './Slice/cekSaldoSlice'
import topUpReducer from './Slice/topUpSlice'

const store = configureStore({
    reducer:{
        banner:bannerReducer,
        registration:register,
        service:layanan,
        profile:profileUser,
        token:authLogin,
        update:updateProfile,
        balance:cekSaldo,
        topUp:topUpReducer
    }
})

export default store;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/Slice/ProfileSlice';
import { getSaldo } from '../../redux/Slice/cekSaldoSlice';

const HeaderProfile = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.profile)
    const {balance} = useSelector((state) => state.balance)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getProfile(token))
            dispatch(getSaldo(token))
        }
    },[dispatch])
  
    return (
        <div className='flex justify-center m-5'>
            <div className='text-left w-full ml-10'>
                <img src='/images/Profile Photo.png' alt='profile' className='w-10'/>
                <h2>Selamat Datang</h2>
                <h1 className='text-2xl'>{data.first_name}</h1>
            </div>
            <div className='w-full bg-banner-saldo bg-cover p-3 pl-4 mr-2 text-white rounded-2xl'>
                <h2 className='text-sm'>Saldo Anda</h2>
                <h1 className='text-2xl my-1'>Rp. {balance.balance}</h1>
                <p>lihat saldo</p>
            </div>
        </div>
    );
}

export default HeaderProfile;

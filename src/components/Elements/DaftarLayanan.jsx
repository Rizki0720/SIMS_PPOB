import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { getLayanan } from './../../redux/Slice/layananSlice';
const DaftarLayanan = () => {
    const dispatch = useDispatch();
    const {service, loading, error } = useSelector((state) => state.service)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getLayanan(token))
        }
        
    },[dispatch])

    return (
        <div className='flex flex-wrap md:flex-nowrap gap-5 justify-center items-center text-center lg:mx-10 py-10'>
            {service.map((item,index) => {
                return(
                        <div key={index} className='w-20 flex flex-col justify-center items-center'>
                            <img src={item.service_icon} 
                                 alt={item.service_code} 
                                 className='w-16'     
                            />
                            <p className='text-sm'>{item.service_name}</p>
                        </div>
                   
                )
            })}
               
            
        </div>
    );
}

export default DaftarLayanan;

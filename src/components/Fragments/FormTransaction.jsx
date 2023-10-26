import React, { useEffect } from 'react';
import TextLine from './../Elements/TextLine';
import InputForm from './../Elements/input/index';
import Button from './../Elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLayanan } from './../../redux/Slice/layananSlice';

const FormTransaction = ({code}) => {
    const dispatch = useDispatch()
    const {service} = useSelector(state => state.service)
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getLayanan(token))
        }
    },[dispatch])
    console.log(service)
    return (
         <form >
            <div className="lg:mx-12 mt-20">
                <div className='lg:mx-14'>
                    <p>Silahkan Masukan</p>
                    <TextLine title="Nominal Top Up"/>
                </div>
                <div className="flex gap-5 ml-14 ">
                    <div className='w-[500px]'>
                         <select className='w-full p-2 bg-slate-100 mb-2 rounded-sm'>
                            {service.map((item,index) => {
                                return (
                                    <option key={index} className='bg-gray-700 text-white'>{item.service_code}</option>
                                )
                            })}
                         </select>
                         <Button type='submit'>Bayar</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormTransaction;

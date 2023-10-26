import React,{useEffect} from 'react';
import HeaderProfile from '../components/Fragments/headerProfile';
import { useDispatch,useSelector } from 'react-redux';
import { getLayanan } from './../redux/Slice/layananSlice';
import {useParams} from 'react-router-dom'
import FormTransaction from './../components/Fragments/FormTransaction';

const Transaction = () => {
   
    return (
        <div>
        <HeaderProfile/>
        <FormTransaction  />
        </div>  
    );
}

export default Transaction;

import React from 'react';
import HeaderProfile from '../components/Fragments/headerProfile';
import DaftarLayanan from '../components/Elements/DaftarLayanan';
import Banner from './../components/Elements/Banner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    },[])
    return (
        <div>
            <HeaderProfile />
            <DaftarLayanan />
            <Banner/>
        </div>
    );
}

export default Home;

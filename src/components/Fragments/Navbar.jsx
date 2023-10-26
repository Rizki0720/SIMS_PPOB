import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { navLinks } from '../../utils/data';
import NavItems from '../Elements/NavItems';
const Navbar = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === '/login'
    const isRegisterPage = location.pathname === '/register'

    if(isLoginPage || isRegisterPage){
        return null
    }


    return (
        <div className='flex justify-between items-center shadow-sm'>
            <div className='flex m-3 p-2 gap-2'>
                <img src='/images/Logo.png' alt='logo' />
                <Link to={'/'} className='text-xl'>SIMS PPOB</Link>
            </div>
            <div  className='flex gap-4 mr-28 '>
            {navLinks.map((item,index) => (
                    <NavItems key={index} title={item.title} path={item.path} />
                    ))}
            </div>  
        </div>
    );
}

export default Navbar;

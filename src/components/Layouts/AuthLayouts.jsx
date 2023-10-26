import React from 'react';
import {Link} from 'react-router-dom'
const AuthLayouts = ({children, type, desc}) => {
    return (
         <div className='w-100 h-screen flex flex-col items-center lg:flex-row'>
            <div className='h-auto w-full absolute lg:relative order-2'>
                <img src="/images/Illustrasi Login.png" alt="auth" className=' w-full h-[100vh]' />
            </div>
            <div className='lg:w-full flex w-[450px] bg-white lg:bg-transparent lg:h-[500px] flex-col mt-28 lg:mt-0 justify-center p-4 items-center relative'>
                <div className='flex gap-2'>
                    <img src="/images/Logo.png" alt="logo" />
                    <h1 className='font-text text-md mt-1 tracking-widest'>SIMS PPOB</h1>
                </div>
                <h1 className='font-text text-xl tracking-widest text-center lg:w-64 mt-2'> {desc} </h1>
                <div className='relative w-80 '>
                   {children}
                    <p className='text-center mt-3'>
                        {type === "login" 
                            ? "Don't have an account? " 
                            : "Already have an account "     
                        }
                        {type === "login" 
                            ? <Link to={"/register"} className='text-blue-600'> 
                                sign up
                            </Link>
                            : <Link to={"/login"} className='text-blue-600'> 
                                sign in
                            </Link> 
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthLayouts;

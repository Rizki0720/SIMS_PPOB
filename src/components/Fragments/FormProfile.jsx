import React from 'react';
import InputForm from '../Elements/input/index'
import Button from '../Elements/Button'
import { useNavigate } from 'react-router-dom';

const FormProfile = ({email,firstName,lastName}) => {
    const navigate = useNavigate()
     const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('password')
        navigate('/login')
     }
    return (
        <form>
            <div className=" p-3 w-[500px]">
                <InputForm 
                    label="Email"
                    type="email"
                    placeholder={email}
                    name="email"
                    textInput="placeholder-black"
                    disabled
                    />
                <InputForm 
                    label="first_name"
                    type="text"
                    placeholder={firstName}
                    name="first_name"
                    textInput="placeholder-black"
                    disabled
                    />
                <InputForm 
                    label="last_name"
                    type="text"
                    placeholder={lastName}
                    name="last_name"
                    textInput="placeholder-black"
                    disabled
                    />
                <Button onClick={() => navigate('/akun/edit')}>Edit Profile</Button>
                <Button onClick={() => handleLogout()}>Logout</Button>
            </div>
        </form>
    );
}

export default FormProfile;

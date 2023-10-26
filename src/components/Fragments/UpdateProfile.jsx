import React,{useState} from 'react';
import InputForm from '../Elements/input/index'
import Button from '../Elements/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {updateProfile} from '../../redux/Slice/updateProfileSlice.js'

const UpdateProfile = ({email,firstName,lastName}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email:event.target.email.value,
            first_name:event.target.first_name.value,
            last_name:event.target.last_name.value,
        }
        dispatch(updateProfile(data)).then((result) => {
            if(result.payload){
                navigate('/akun')
            }
        })
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div className=" p-3 w-[500px]">
                <InputForm 
                    label="Email"
                    type="email"
                    placeholder={email}
                    name="email"
                    textInput="placeholder-black"
                    
                    />
                <InputForm 
                    label="first_name"
                    type="text"
                    placeholder={firstName}
                    name="first_name"
                    textInput="placeholder-black"
                    
                    />
                <InputForm 
                    label="last_name"
                    type="text"
                    placeholder={lastName}
                    name="last_name"
                    textInput="placeholder-black"
                    
                    />
                <Button type="submit" >Simpan</Button>
               
            </div>
        </form>
    );
}

export default UpdateProfile;

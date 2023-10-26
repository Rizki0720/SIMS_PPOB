import {useState,useEffect} from 'react'
import {getUsername} from '../services/auth.services.js'
import { Navigate } from 'react-router-dom';

const useLogin = () => {
    const [isEmail, setEmail] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setEmail(getUsername(token))
        }else{
            Navigate("/login")
        }
    },[])
     return isEmail

    
}

export default useLogin
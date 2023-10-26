import React,{useState} from 'react';
import InputForm from '../Elements/input';
import Button from '../Elements/Button';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Slice/RegisterSlice';
import { useDispatch } from 'react-redux';
const FromRegister = () => {
    const dispatch = useDispatch()
    const [loginFail,setLoginFail] = useState("")
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const data = {
            email:event.target.email.value,
            first_name:event.target.first_name.value,
            last_name:event.target.last_name.value,
            password:event.target.password.value,
            confPassword:event.target.confPassword.value,
        }
        dispatch(registerUser(data)).then((result) => {
            if(result.payload){
                navigate('/login')
            }
        })
        
    }
    return (
         <form onSubmit={handleRegister}>
        <InputForm
       
            type="email"
            placeholder="email..."
            name="email"
            id="email"
        />
        <InputForm
           
            type="text"
            placeholder="firstName..."
            name="first_name"
            id="first_name"
        />
        <InputForm
            type="text"
            placeholder="Lastname..."
            name="last_name"
            id="last_name"
        />
        <InputForm
            type="password"
            placeholder="****"
            name="password"
            id="email"
        />
        <InputForm
            type="password"
            placeholder="****"
            name="confPassword"
            id="confPassword"
        />
        <Button variant="bg-blue-600 " type="submit">login</Button>
        {loginFail && <p className="text-red-500 text-center mt-2">{loginFail} </p>}
       </form>
    );
}

export default FromRegister;


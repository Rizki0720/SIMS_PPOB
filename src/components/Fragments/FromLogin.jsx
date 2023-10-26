// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup'
// import FormInput from './../Elements/FormInput';
// import Button from '../Elements/Button'
// import { useDispatch } from 'react-redux';
// import { loginStart,loginSuccess } from '../../redux/actions/LoginSlice';
// // import Axios from '../../services/axios'
// import jwt_decode from 'jwt-decode'
// import axios from 'axios';

// const FromLogin = () => {
//     const dispatch = useDispatch()
//     const handleLogin = async(values) => {
//         dispatch(loginStart())
//         const response = await axios.post('https://take-home-test-api.nutech-integrasi.app/login', values)
//         const {token}  = response.data
//         const userDecoded = jwt_decode(token)
//         dispatch(loginSuccess(userDecoded))
//         localStorage.setItem('token', token)
  
//     }
//     return (
//            <Formik 
//             initialValues={{
//                 email:"",
//                 password:"",
//             }}
//             validationSchema={Yup.object({
//                 email:Yup.string().required("email harus diisi").email("email sudah terdaftar"),
//                 password:Yup.string().min(8,"password terlalu pendek").required("masukkan passwordmu"),
//             })}
//             onSubmit={handleLogin}    
//         >
//         {formik => (
//             <form onSubmit={formik.handleSubmit}>
//                 <FormInput
//                     name="email" 
//                     type="email"
//                     placeholder=" masukkan email anda"
//                     onChange={formik.handleChange}
                   
//                 />
//                 <FormInput
//                     name="password"
//                     type="password"
//                     placeholder="@ masukkan password"
//                     onChange={formik.handleChange}
                    
//                 />
//                 <Button type="submit" classname="mt-2"  >
//                     Masuk
//                 </Button>
//             </form>
//         )}
//         </Formik>
//     );
// }

// export default FromLogin;

import React,{useState} from 'react';
import InputForm from '../Elements/input';
import Button from '../Elements/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/Slice/LoginSlice';

const FormLogin = () => {
    const dispatch = useDispatch()
    const [loginFail,setLoginFail] = useState("")
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()
        const data = {
            email:event.target.email.value,
            password:event.target.password.value
        }
        dispatch(loginUser(data)).then((result) => {
            if(result.payload){
                navigate('/')
            }
        })
    }
    return (
       <form onSubmit={handleLogin}>
        <InputForm
            label="email"
            type="email"
            placeholder="email..."
            name="email"  
        />
        <InputForm
            label="Password"
            type="password"
            placeholder="****"
            name="password"
            
        />
        <Button variant="bg-blue-600 " type="submit">login</Button>
        {loginFail && <p className="text-red-500 text-center mt-2">{loginFail} </p>}
       </form>
    );
}

export default FormLogin;

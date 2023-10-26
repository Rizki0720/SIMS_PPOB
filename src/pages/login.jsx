import React from 'react';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import FromLogin from '../components/Fragments/FromLogin';

const Login = () => {
    return (
        <AuthLayouts type="login" desc="Masuk atau buat akun untuk memulai">
            <FromLogin/>
        </AuthLayouts>
    );
}

export default Login;

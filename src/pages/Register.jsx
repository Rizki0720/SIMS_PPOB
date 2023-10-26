import React from 'react';
import AuthLayouts from './../components/Layouts/AuthLayouts';
import FromRegister from './../components/Fragments/FromRegister';

const Register = () => {
    return (
        <AuthLayouts type="register" desc="Lengkapi data untuk membuat akun">
            <FromRegister />
        </AuthLayouts>
    );
}

export default Register;

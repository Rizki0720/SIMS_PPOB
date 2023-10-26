import React from 'react';

const Input = (props) => {
    const {type, placeholder,name, textInput, disabled, value} = props
    return (
        <input 
            type={type}
            className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${textInput}`}
            placeholder={placeholder}
            name={name}
            id={name}
            disabled={disabled}
            value={value}
        />
    );
}

export default Input;
import React from 'react';

const Button = (props) => {
    const {children, onClick = () => {}, type="button", disabled} = props
    return (
        <div>
            <button className={`h-10 px-6 w-full font-semibold mt-1 rounded-md bg-red-600 text-white
                              hover:bg-white hover:text-black 
                              hover:border hover:border-red-600 disabled:bg-gray-400 `}
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;

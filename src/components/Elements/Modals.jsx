import React from 'react';


const Modals = ({open, onClose, title}) => {
    return (
        <div className={` ${open ? "visible bg-green-500" : "invisible" } flex justify-between relative top-16 -left-[420px] mx-auto p-5 border w-96 shadow-lg rounded-md  `}>
            <h1 className='text-2x text-white'>{title}</h1>
            <button className='text-white p-0' onClick={onClose}>X</button>
        </div>
    );
}

export default Modals;

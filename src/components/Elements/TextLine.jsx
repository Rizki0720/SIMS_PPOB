import React from 'react';

const TextLine = ({title}) => {
    return (
       <div className='w-100'>
            <h1 className='font-semibold text-xl text-left mx-5 lg:mx-0'>{title}</h1>
       </div>
    );
}

export default TextLine;

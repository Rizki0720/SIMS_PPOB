import React from 'react';

const ProfileLayouts = ({children,firstName,lastName}) => {
    return (
        <div className='flex flex-col justify-center items-center border-2 py-2 '>
            <div className='flex flex-col w-auto justify-center items-center'>
                <img src="/public/images/Profile Photo.png" alt={firstName} className='w-24' />
                <h1 className='mt-3 text-lg'>{firstName}<span> {lastName}</span></h1>
            </div>
            {children}
        </div>
    );
}

export default ProfileLayouts;

import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({path, title}) => {
    return (
            <ul>
                <Link to={`/${path}`}>
                    <li className='text-lg tracking-wide p-2 hover:text-red-600'>{title}</li>
                </Link>
            </ul>
    );
}

export default NavItems;

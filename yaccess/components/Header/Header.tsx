import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-2.5 bg-white text-blue-800 shadow-md fixed top-0 w-full">
            <div className="flex items-center">
                <IoMdHome size={32} className="text-blue-800" />
            </div>
            <div className="text-xl font-bold text-blue-800">Yaccess</div>
            <div className="flex items-center">
                <FaUser size={24} className="text-blue-800" />
            </div>
        </header>
    );
};

export default Header;

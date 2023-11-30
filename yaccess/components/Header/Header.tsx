import React from 'react';
import profile from '../../public/profile.svg'
import home from '../../public/home.svg'
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-blue-800 shadow-md fixed top-0 w-full">
            <div className="flex items-center">
                <Image src={home} alt="Home icon"/>
            </div>
            <div className="text-xl font-bold text-blue-800">Yaccess</div>
            <div className="flex items-center">
                <Image src={profile} alt="Profile icon"/>
            </div>
        </header>
    );
};

export default Header;

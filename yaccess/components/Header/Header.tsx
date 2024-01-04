import React from 'react';
import profil from '../../public/profile.svg'
import home from '../../public/home.svg'
import Image from "next/image";
import Link from 'next/link';
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-blue-800 shadow-md fixed top-0 w-full z-50">
            <div className="flex items-center">
                <Image src={home} alt="Home icon"/>
            </div>
            <div className="text-xl font-bold text-blue-800">Yaccess</div>
            <div className="flex items-center">
                <Link href="/profile">
                    <Image src={profil} alt="Profile icon"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;

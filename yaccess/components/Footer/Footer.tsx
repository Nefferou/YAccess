import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white flex flex-col fixed bottom-2 w-full">
            <div className="pl-8 flex flex-col gap-8">
                <div className="location">
                    <h4 className="text-lg mb-2">Location</h4>
                    <p className="text-base leading-6">Sophia Ynov Campus</p>
                    <p className="text-base leading-6">Place Sophie Laffitte, Immeuble AGORA,</p>
                    <p className="text-base leading-6">06560 Valbonne</p>
                </div>
                <div className="help">
                    <h4 className="text-lg mb-2">You need help ?</h4>
                    <a href="/contact" className="text-blue-500 leading-6 hover:underline">Contact the customer service !</a>
                </div>
                <div className="socials">
                    <h4 className="text-lg mb-2">Join our socials</h4>
                    <div className="icons flex gap-4">
                        <a href="https://www.facebook.com" className="text-white text-2xl hover:text-blue-500"><FaFacebookF /></a>
                        <a href="https://www.instagram.com" className="text-white text-2xl hover:text-blue-500"><FaInstagram /></a>
                        <a href="https://www.linkedin.com" className="text-white text-2xl hover:text-blue-500"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="privacy flex flex-col">
                    <h4 className="text-lg mb-2">Privacy</h4>
                    <a href="/terms" className="text-blue-500 leading-6 hover:underline">Terms and conditions</a>
                    <a href="/legal" className="text-blue-500 leading-6 hover:underline">Legal Notice</a>
                    <a href="/cookies" className="text-blue-500 leading-6 hover:underline">Cookies</a>
                </div>
            </div>
            <div className="text-xs mx-auto mt-8">
                <p>Copyright © Yaccess</p>
            </div>
        </footer>
    );
};

export default Footer;

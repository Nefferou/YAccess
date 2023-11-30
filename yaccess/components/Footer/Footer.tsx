import React from 'react';
import instagram from '../../public/instagram.svg';
import facebook from '../../public/facebook.svg';
import linkedin from '../../public/linkedin.svg';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-white flex flex-col relative bottom-2 w-full mt-24">
            <div className="pl-8 flex flex-col gap-6">
                <div className="location">
                    <h4 className="text-lg mb-1">Location</h4>
                    <p className="text-xs leading-6">Sophia Ynov Campus</p>
                    <p className="text-xs leading-6">Place Sophie Laffitte, Immeuble AGORA,</p>
                    <p className="text-xs leading-6">06560 Valbonne</p>
                </div>
                <div className="help">
                    <h4 className="text-lg mb-1">You need help ?</h4>
                    <a href="/contact" className="text-white-primary text-xs leading-6">Contact the <u className="hover:font-bold">customer service</u> !</a>
                </div>
                <div className="socials">
                    <h4 className="text-lg mb-2">Join our socials</h4>
                    <div className="icons flex gap-4">
                        <a href="https://www.facebook.com" className="">
                            <Image src={facebook} alt="Facebook icon"/>
                        </a>
                        <a href="https://www.instagram.com" className="">
                            <Image src={instagram} alt="Instagram icon"/>
                        </a>
                        <a href="https://www.linkedin.com" className="">
                            <Image src={linkedin} alt="Linkedin icon"/>
                        </a>
                    </div>
                </div>
                <div className="privacy flex flex-col">
                    <h4 className="text-lg mb-1">Privacy</h4>
                    <a href="/terms" className="text-white-primary text-xs leading-6 hover:font-bold">Terms and conditions</a>
                    <a href="/legal" className="text-white-primary text-xs leading-6 hover:font-bold">Legal Notice</a>
                    <a href="/cookies" className="text-white-primary text-xs leading-6 hover:font-bold">Cookies</a>
                </div>
            </div>
            <div className="text-xs mx-auto mt-8">
                <p>Copyright © Yaccess</p>
            </div>
        </footer>
    );
};

export default Footer;

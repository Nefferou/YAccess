import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
/*
UTILISATION

import Input from "../components/ui/Input/Input";

<Input
    icon={carpooling}
    size="normal"
    placeholder="Enter your username"
/>
<Input
    icon={parking}
    size="small"
    placeholder="Search..."
    type="password"
    text="example@example.com"
/>
 */

const Input = ({ icon, size, placeholder, type = "text", text =""}) => {
    const widthClass = size === 'small' ? 'w-1/2' : 'w-full';
    return (
        <div className={`flex items-center rounded-xl h-12 ${widthClass} p-2 bg-white-primary shadow-inputShadow`}>
            {icon && (
                <div className="mr-2 flex-shrink-0">
                    <Image src={icon} alt="" width={20} height={20} />
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={text}
                className="flex-1 bg-transparent outline-none text-black"
            />
        </div>
    );
};

Input.propTypes = {
    icon: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'normal']),
    placeholder: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Input;

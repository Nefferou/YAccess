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
/>
 */

const Input = ({ icon, size, placeholder, type = "text" }) => {
    const widthClass = size === 'small' ? 'w-1/2' : 'w-full';
    return (
        <div className={`flex items-center rounded-2xl h-12 ${widthClass} p-2 bg-white-primary shadow-inputShadow`}>
            {icon && (
                <div className="mr-2 flex-shrink-0">
                    <Image src={icon} alt="" width={20} height={20} />
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
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
};

export default Input;

import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import Image, { StaticImageData } from 'next/image';
/*
UTILISATION

import Input from "../components/ui/Input/Input";

<Input
    type="text"
    icon={rocket}
    label="Username"
    size="normal"
    value={username}
    name="username"
    placeholder="Username"
    error={false}
    onChange={(e) => setUsername(e.target.value)}
/>
*/

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    icon?: StaticImageData
    size: 'normal' | 'small';
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, icon, size, value, name, placeholder, error, disabled, onChange }: InputProps) => {
    const sizes = {
        normal: 'w-full',
        small: 'w-1/2',
    };

    return (
        <div className={`flex items-center rounded-2xl h-12 bg-white-primary p-2 shadow-inputShadow ${sizes[size]}`}>
            {icon && (
                <div className="mr-2 flex-shrink-0">
                    <Image src={icon} alt="icon" width={20} height={20} />
                </div>
            )}

            <div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={`outline-none bg-transparent text-sm font-semibold ${error ? 'text-red-500' : 'text-black'}`}
                    disabled={disabled}
                    onChange={onChange}
                />
                {error && (
                    <p className="text-red-500 text-xs font-semibold">
                        {
                            type === 'text' ? 'Please enter a valid username' :
                                type === 'number' ? 'Please enter a valid number' :
                                    type === 'email' ? 'Please enter a valid email' :
                                        type === 'password' ? 'Please enter a valid password' :
                                            ''
                        }
                    </p>
                )}
            </div>
        </div>
    );
};

export default Input;

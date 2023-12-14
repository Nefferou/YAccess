"use client";

type ButtonProps = {
    text: string;
    type?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({ text, type = 'primary', size = 'medium', disabled = false, onClick }: ButtonProps) => {
    let baseClasses = 'px-4 py-1 rounded-2xl focus:outline-none text-base text-center';

    let typeClasses = '';
    let style = {};

    if (type === 'primary' && !disabled) {
        typeClasses = 'text-white shadow-purpleButtonShadow';
        style = { background: 'linear-gradient(90deg, #968DDA 0%, #953EDA 100.18%)' };
    } else if (type === 'secondary' && !disabled) {
        typeClasses = 'text-white shadow-redButtonShadow';
        style = { background: 'linear-gradient(90deg, #DA8D8D 0%, #DA3E3E 100.18%)' };
    }

    if (disabled) {
        typeClasses = 'shadow-greyButtonShadow text-white cursor-not-allowed';
        style = { background: 'linear-gradient(90deg, rgb(145 145 147) 15.13%, rgb(181 180 180) 100.18%)' };
    }

    let sizeClasses = '';
    if (size === 'small') {
        sizeClasses = 'w-24';
    } else if (size === 'medium') {
        sizeClasses = 'w-36';
    } else if (size === 'large') {
        sizeClasses = 'w-44';
    }

    return (
        <button
            className={`${baseClasses} ${typeClasses} ${sizeClasses}`}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            style={style}
        >
            {text}
        </button>
    );
};

export default Button;

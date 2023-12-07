import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
/*
Utilisation :
import Popup from 'components/Popup/Popup';

<Popup message="Course posted" type="info" />
<Popup message="Cool feedback" type="success" />
<Popup message="Course declined" type="error" />
 */
const Popup = ({ message, type }) => {
    let bgColorClass;
    let IconComponent;

    switch (type) {
        case 'success':
            bgColorClass = 'bg-green-500';
            IconComponent = FaCheckCircle;
            break;
        case 'error':
            bgColorClass = 'bg-red-500';
            IconComponent = FaExclamationTriangle;
            break;
        case 'info':
        default:
            bgColorClass = 'bg-blue-primary';
            IconComponent = FaInfoCircle;
            break;
    }

    return (
        <div className={`fixed top-1 left-1/2 transform -translate-x-1/2 w-full py-3 flex items-center justify-center ${bgColorClass} rounded text-white shadow-md`}>
            <IconComponent className="mr-2" size={20} />
            <span className="text-sm font-medium">{message}</span>
        </div>

    );
};

Popup.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'info']),
};

export default Popup;

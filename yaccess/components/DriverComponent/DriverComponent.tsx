'use client';
import React from 'react';
import Driver from '../ui/Driver/Driver';
import Badge from '../../models/Badge';

interface DriverComponentProps {
    driverPP: string;
    driverName: string;
    driverBadges: Badge[];
    driverRating: number;
}

const DriverComponent: React.FC<DriverComponentProps> = ({
    driverPP,
    driverName,
    driverBadges,
    driverRating,
}) => {
    const test = () => {
        console.log('test');
    };
    return (
        <>
            <Driver driverPP={driverPP} driverName={driverName} driverBadges={driverBadges} driverRating={driverRating} driverOnClick={test}/>
        </>
    );
};

export default DriverComponent;

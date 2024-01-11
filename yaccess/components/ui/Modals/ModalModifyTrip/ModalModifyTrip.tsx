"use client"
import Button from "../../Button/Button";
import {useEffect} from "react";
import Input from "../../Input/Input";
import mapPin from "../../../../public/map-pin.svg";
import pin from "../../../../public/pin.svg";
import calendar from "../../../../public/calendar.svg";

interface ModalModifyTripProps {
    onClose: () => void;
}

const ModalModifyTrip = ({onClose}: ModalModifyTripProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-2xl w-4/5 px-6 py-9 flex flex-col gap-6 shadow-modalShadow">
                <Input size='medium' placeholder='Departure' icon={mapPin}/>
                <Input size='medium' placeholder='Arrival' icon={pin}/>
                <Input size='small' placeholder='Date' icon={calendar}/>
                <div className="flex gap-4 mt-4">
                    <Button text="Close" size="medium" onClick={onClose}/>
                    <Button text="Cancel trip" type="secondary" size="medium"/>
                </div>
            </div>
        </div>
    );
};

export default ModalModifyTrip;

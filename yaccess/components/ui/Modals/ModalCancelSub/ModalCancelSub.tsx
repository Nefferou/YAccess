"use client"
import Button from "../../Button/Button";
import {useEffect} from "react";
import Subtitle from "../../Subtitle/Subtitle";

interface ModalCancelSubProps {
    onClose: () => void;
}

const ModalCancelSub = ({onClose}: ModalCancelSubProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-2xl w-4/5 p-6 flex flex-col gap-6 shadow-modalShadow">
                <Subtitle text="Do you really want to cancel the subscription ?" color="blue-primary" />
                <span className="text-blue-primary ">You will still get the benefits until the end of the subscription.</span>
                <div className="flex gap-4 mt-4">
                    <Button text="No" size="medium" onClick={onClose}/>
                    <Button text="Yes" type="secondary" size="medium"/>
                </div>
            </div>
        </div>
    );
};

export default ModalCancelSub;

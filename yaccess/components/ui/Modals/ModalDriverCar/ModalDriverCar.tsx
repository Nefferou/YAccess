"use client"
import Button from "../../Button/Button";
import {useEffect} from "react";
import Input from "../../Input/Input";
import svg_model_car from "../../../../public/modelcar.svg";

interface ModalDriverCarProps {
    onClose: () => void;
}

const ModalDriverCar = ({onClose}: ModalDriverCarProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-2xl w-4/5 p-6 flex flex-col gap-6 shadow-modalShadow">
                <Input size='medium' placeholder='Model' icon={svg_model_car}/>
                <Input size='medium' placeholder='Plate number' icon={svg_model_car}/>
                <div className="flex gap-4 mt-4">
                    <Button text="Submit" size="medium" />
                    <Button text="Cancel" type="secondary" size="medium" onClick={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default ModalDriverCar;

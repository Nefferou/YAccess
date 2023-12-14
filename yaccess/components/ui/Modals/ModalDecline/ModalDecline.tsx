"use client"
import Subtitle from "../../Subtitle/Subtitle";
import Button from "../../Button/Button";
import {useEffect} from "react";

const ModalDecline = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-2xl w-4/5 p-6 flex flex-col gap-4 shadow-modalShadow">
                <Subtitle text="Do you really want to decline ?" color="blue-primary" />
                <div>
                    <label htmlFor="justification" className="text-blue-primary">Justification <span className="text-red-400">*</span> :</label>
                    <textarea name="justification" id="justification" className="w-full mt-2 border-gray-300 rounded-md p-2 bg-light-purple text-black" cols={30} rows={3} required></textarea>
                </div>
                <div className="flex gap-4 mt-4">
                    <Button text="Yes" size="medium" />
                    <Button text="No" type="secondary" size="medium" />
                </div>
            </div>
        </div>
    );
};

export default ModalDecline;

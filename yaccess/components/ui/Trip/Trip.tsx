"use client"
import React, {useState} from 'react';
import Image from "next/image";
import labelIcon from '../../../public/map-pin-front-color.svg';
import dateIcon from '../../../public/calender-front-color.svg';
import Button from "../Button/Button";
import ModalDecline from "../Modals/ModalDecline/ModalDecline";
import ModalModifyTrip from "../Modals/ModalModifyTrip/ModalModifyTrip";
import ModalDeleteAccount from "../Modals/ModalDeleteAccount/ModalDeleteAccount";

type Props = {
    label: string;
    date: string;
    modal: string;
};

const Trip: React.FC<Props> = ({ label, date, modal }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    let modalToDisplay;

    switch(modal) {
        case 'decline':
            modalToDisplay = isModalVisible && <ModalDecline onClose={() => setModalVisible(false)} />;
            break;
        case 'modify':
            modalToDisplay = isModalVisible && <ModalModifyTrip onClose={() => setModalVisible(false)} />;
            break;
        case 'delete':
            modalToDisplay = isModalVisible && <ModalDeleteAccount onClose={() => setModalVisible(false)} />;
            break;
        default:
            modalToDisplay = null;
    }

    const handleButtonClick = () => {
        setModalVisible(true);
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-4 max-w-sm w-full mx-auto">
            <div className="flex justify-between"> {/* Parent container */}
                <div className="flex flex-col justify-around flex-grow"> {/* Left column */}
                    <div className="flex items-center"> {/* First row */}
                        <Image src={labelIcon} alt="Label icon" width={20} height={20} />
                        <p className="text-blue-primary font-bold ml-2">{label}</p>
                    </div>
                    <div className="flex items-center"> {/* Second row */}
                        <Image src={dateIcon} alt="Date icon" width={20} height={20} />
                        <p className="text-gray-500 text-sm ml-2">{date}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center"> {/* Right column */}
                    <Button text={"Modify"} size={"small"} onClick={handleButtonClick}/>
                </div>
                {modalToDisplay}
            </div>
        </div>
    );
};

export default Trip;

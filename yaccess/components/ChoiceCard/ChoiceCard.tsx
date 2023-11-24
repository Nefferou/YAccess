"use client";
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

type Props = {
    svg: string;
    title: string;
    onLeftImage: boolean;
    link: string;
    isOverflowVisisble?: boolean;
}

const ChoiceCard = ({svg, title, onLeftImage, link, isOverflowVisisble} : Props) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    return (
        <div className={`${onLeftImage ? 'flex-row-reverse' : 'flex-row'} ${isOverflowVisisble ? 'overflow-visible' : 'overflow-hidden'} flex bg-white-primary rounded-lg w-80 h-32 shadow-choiceCardShadow justify-between items-center cursor-pointer hover:bg-gray-100`}
             onClick={handleClick}>
            <h2 className="text-blue-primary text-2xl tracking-widest font-title px-4">{title}</h2>
            <Image src={svg} alt={title} className={`${isOverflowVisisble ? 'relative bottom-1 left-3' : ''}`} />
        </div>
    );
};

export default ChoiceCard;

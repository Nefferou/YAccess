import React from 'react';
import ChoiceCard from "../../components/ChoiceCard/ChoiceCard";
import driver from "../../public/driver.svg";
import passenger from "../../public/passenger.svg";

const Page = () => {
    return (
        <div className="px-8 pt-20 flex flex-col items-center gap-8">
            <h1 className="text-3xl font-semibold tracking-wider">Carpooling</h1>
            <div className="flex flex-col gap-10">
                <ChoiceCard title="Driver" svg={driver} onLeftImage={false} link="/carpooling/driver"></ChoiceCard>
                <ChoiceCard title="Passenger" svg={passenger} onLeftImage={true} link="/carpooling/passenger" isOverflowVisisble></ChoiceCard>
            </div>
        </div>
    );
};

export default Page;

"use client";
import React, {useState} from 'react';
import Image from "next/image";
import profile from "../../public/profile-mock.svg";
import Input from "../../components/ui/Input/Input";
import email from "../../public/email-logo.svg";
import lock from "../../public/lock.svg";
import Button from "../../components/ui/Button/Button";
import Trip from "../../components/ui/Trip/Trip";
import Link from "next/link";
import ModalDeleteAccount from "../../components/ui/Modals/ModalDeleteAccount/ModalDeleteAccount";
import ModalDriverCar from "../../components/ui/Modals/ModalDriverCar/ModalDriverCar";


const Page = () => {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isDeleteModalVisibleTwo, setDeleteModalVisibleTwo] = useState(false);


    const handleDeleteClick = () => {
        setDeleteModalVisible(true);
    };

    const handleDeleteTwoClick = () => {
        setDeleteModalVisibleTwo(true);
    };


    return (
        <div className="h-screen px-8 pt-20 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center justify-center">
                <Image src={profile} alt="carpooling" width={120} height={120} />
                <h2 className="text-2xl font-semibold tracking-wider">Carlos Vargas (driver)</h2>
            </div>
            <div>
                <div className="flex flex-wrap gap-6">
                    <Input
                        value={""}
                        type='email'
                        name='email'
                        icon={email}
                        size="normal"
                        disabled
                        placeholder="E-mail"
                        error={false}
                    />
                    <Input
                        value={""}
                        name='password'
                        icon={lock}
                        size="normal"
                        placeholder="Password"
                        type="password"
                    />
                    <Button text="Modify your car" size="large" onClick={handleDeleteTwoClick}/>
                    {isDeleteModalVisibleTwo &&
                        <ModalDriverCar onClose={() => setDeleteModalVisibleTwo(false)} />}
                </div>
                <div className="flex flex-wrap gap-4">
                    <h2 className="text-base font-semibold pt-6">Your planned routes</h2>
                    <Trip label="Cannes to Sophia" date="15/12/2022" modal="decline"/>
                    <Trip label="Cannes to Sophia" date="15/12/2022" modal="modify"/>
                    <Trip label="Cannes to Sophia" date="15/12/2022" modal="modify"/>
                </div>
                <div className="flex flex-col items-center gap-8 pt-6">
                    <Link href="/auth/signout">
                        <Button text="Logout" size="large" />
                    </Link>
                    <>
                        <Button text="Delete account" size="large" type="secondary" onClick={handleDeleteClick}  />
                    </>
                </div>
                {isDeleteModalVisible &&
                    <ModalDeleteAccount onClose={() => setDeleteModalVisible(false)} />}
            </div>
        </div>
    );
};

export default Page;

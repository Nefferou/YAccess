import React from 'react';
import Image from "next/image";
import profile from "../../public/profile-mock.svg";
import Input from "../../components/ui/Input/Input";
import email from "../../public/email-logo.svg";
import lock from "../../public/lock.svg";
import Button from "../../components/ui/Button/Button";
import Trip from "../../components/ui/Trip/Trip";
import Link from "next/link";

const Page = () => {
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
                        icon={lock}
                        size="normal"
                        placeholder="Password"
                        type="password"
                        text="enzo mot de passe"
                    />
                    <Button text="Modify your car" size="large" />
                </div>
                <div className="flex flex-wrap gap-4">
                    <h2 className="text-base font-semibold pt-6">Your planned routes</h2>
                    <Trip label="Cannes to Sophia" date="15/12/2022" />
                    <Trip label="Cannes to Sophia" date="15/12/2022" />
                    <Trip label="Cannes to Sophia" date="15/12/2022" />
                </div>
                <div className="flex flex-col items-center gap-8 pt-6">
                    <Link href="/auth/signout">
                        <Button text="Logout" size="large" />
                    </Link>
                    <Link href="/auth/signin">
                        <Button text="Delete account" size="large" type="secondary" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;

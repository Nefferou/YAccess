import React from 'react';
import Title from "../../components/ui/Title/Title";
import Input from "../../components/ui/Input/Input";
import rocket from "../../public/rocket.svg";
import Image from "next/image";
import email from "../../public/email-logo.svg";
import phone from "../../public/phone-profile.svg";
import lock from "../../public/lock.svg";
import name from "../../public/full-name.svg";
import Button from "../../components/ui/Button/Button";
const Register = () => {
    return (
        <div className="h-screen bg-white-primary">
            <div className="top-0 bg-gradient-to-r-from-purple-to-deep-purple rounded-b-full h-2/5 shadow-inputShadow px-8 py-16">
                <Title text="Register" placement="left" subtitle="Join us ! lorem ipsum blabla !!"/>
                <div className="flex justify-center pt-6">
                    <Image src={rocket} alt="rocket" width={200} height={200}/>
                </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-4 px-20 py-8">
                <Input
                    icon={name}
                    size="normal"
                    placeholder="Enter your username"
                />
                <Input
                    icon={email}
                    size="normal"
                    placeholder="E-mail"
                />
                <Input
                    icon={phone}
                    size="normal"
                    placeholder="Phone"
                />
                <Input
                    icon={lock}
                    size="normal"
                    placeholder="Password"
                    type="password"
                />
                <Input
                    icon={lock}
                    size="normal"
                    placeholder="Confirm password"
                    type="password"
                />
            </div>
            <div className="flex justify-center">
                <Button text="Next step"></Button>
            </div>
        </div>
    );
};

export default Register;

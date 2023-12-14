import React from 'react';
import Title from "../../components/ui/Title/Title";
import Input from "../../components/ui/Input/Input";
import rocket from "../../public/rocket.svg";
import Image from "next/image";
import email from "../../public/email-logo.svg";
import lock from "../../public/lock.svg";
import Button from "../../components/ui/Button/Button";
const Login = () => {
    return (
        <div className="h-screen bg-white-primary">
            <div className="top-0 bg-gradient-to-r-from-purple-to-deep-purple rounded-b-full h-2/5 shadow-inputShadow px-8 py-8">
                <Title text="Login" placement="left" subtitle="Connect ! lorem ipsum blabla !!"/>
                <div className="flex justify-center pt-6">
                    <Image src={rocket} alt="rocket" width={200} height={200}/>
                </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-4 p-12">
                <Input
                    icon={email}
                    size="normal"
                    placeholder="E-mail"
                />
                <Input
                    icon={lock}
                    size="normal"
                    placeholder="Password"
                />
            </div>
            <div className="flex justify-center">
                <Button text="Next step"></Button>
            </div>
        </div>
    );
};

export default Login;

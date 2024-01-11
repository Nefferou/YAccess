'use client';

import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import { signUp } from '../../app/actions/users/signUp';
import { User } from '@prisma/client';
import Title from '../ui/Title/Title';
import Image from 'next/image';
import Input from "../../components/ui/Input/Input";
import rocket from "../../public/rocket.svg";
import email from "../../public/email-logo.svg";
import phone from "../../public/phone-profile.svg";
import lock from "../../public/lock.svg";
import name from "../../public/full-name.svg";
import Button from "../../components/ui/Button/Button";
import Link from "next/link";

const SignUpForm = () => {
    const [user, setUser] = useState({} as User);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (user.password === confirmPassword) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
            setMessage("Passwords don't match");
        }
    }, [user, confirmPassword]);

    const handleSubmit = async () => {
        setMessage("Signing up...");
        const message = await signUp({ user });
        setMessage(message);
    };

    return (
        <div className="h-screen bg-white-primary">
            <div className="top-0 bg-gradient-to-r-from-purple-to-deep-purple rounded-b-full h-2/5 shadow-inputShadow px-8 py-16">
                <Title text="Register" placement="left" subtitle="Join us ! lorem ipsum blabla !!" />
                <div className="flex justify-center pt-6">
                    <Image src={rocket} alt="rocket" width={200} height={200} />
                </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-4 px-20 py-8">
                <Input
                    type='text'
                    name='name'
                    value={user.name || ''}
                    icon={name}
                    size="normal"
                    placeholder="Enter your name"
                    onChange={e => setUser({ ...user, name: e.target.value })}
                />
                <Input
                    type='email'
                    name='email'
                    value={user.email}
                    icon={email}
                    size="normal"
                    placeholder="E-mail"
                    onChange={e => setUser({ ...user, email: e.target.value })}
                />
                <Input
                    type='text'
                    name='phone'
                    value={user.phoneNumber || ''}
                    icon={phone}
                    size="normal"
                    placeholder="Phone"
                    onChange={e => setUser({ ...user, phoneNumber: e.target.value })}
                />
                <Input
                    type='password'
                    name='password'
                    value={user.password}
                    icon={lock}
                    size="normal"
                    placeholder="Password"
                    onChange={e => setUser({ ...user, password: e.target.value })}
                />
                <Input
                    type='password'
                    name='password'
                    value={confirmPassword}
                    icon={lock}
                    size="normal"
                    placeholder="Confirm password"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="flex justify-center">
                <Link href="/auth/signin">
                    <Button
                        text="Next step"
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                    ></Button>
                </Link>
            </div>
            <div className="flex justify-center text-black text-xs font-semibold mt-2">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default SignUpForm;
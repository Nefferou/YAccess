'use client';

import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Title from "../../components/ui/Title/Title";
import Input from "../../components/ui/Input/Input";
import rocket from "../../public/rocket.svg";
import Image from "next/image";
import email from "../../public/email-logo.svg";
import lock from "../../public/lock.svg";
import Button from "../../components/ui/Button/Button";


const SignInForm = () => {
    const router = useRouter();

    const { status } = useSession();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage('Signing in...');

        try {
            const signInResponse = await signIn('credentials', {
                email: mail,
                password: password,
                redirect: false,
            })

            if (!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }

        } catch (err) {
            console.log(err);
        }

        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/');
        }
    }, [status, router]);

    return (
        <div className="h-screen bg-white-primary">
            <div className="top-0 bg-gradient-to-r-from-purple-to-deep-purple rounded-b-full h-2/5 shadow-inputShadow px-8 py-8">
                <Title text="Login" placement="left" subtitle="Connect ! lorem ipsum blabla !!" />
                <div className="flex justify-center pt-6">
                    <Image src={rocket} alt="rocket" width={200} height={200} />
                </div>
            </div>
            <form method='post' className="flex flex-wrap gap-8 mt-4 p-12 justify-center flex-col">
                <Input
                    type='email'
                    icon={email}
                    size='normal'
                    value={mail}
                    name="email"
                    placeholder="Email"
                    error={message !== ''}
                    onChange={(e) => setMail(e.target.value)}
                />
                <Input
                    type='password'
                    icon={lock}
                    size='normal'
                    value={password}
                    name="password"
                    placeholder="Password"
                    error={message !== ''}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-center">
                    <Button text="Sign in" onClick={handleSubmit} />
                </div>
                {
                    message !== '' &&
                    <div className="flex justify-center text-black">
                        <p>{message}</p>
                    </div>

                }
                <div>
                    <a href='/auth/signup' className="flex justify-center text-blue-primary">Register your self</a>
                </div>
            </form>

        </div>
    );
};

export default SignInForm;
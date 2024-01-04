import Header from "../../components/Header/Header";
import React from "react";
import { UserContextProvider } from "../../contexts/userContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </main>
        </>
    )
}

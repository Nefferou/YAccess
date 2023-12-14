import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { User } from '../models/User';

// Définir le type pour le contexte utilisateur
type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<null>>;
};

// Créer le contexte utilisateur
export const UserContext = createContext<UserContextType>(undefined!);

// Créer le fournisseur du contexte utilisateur
export function UserContextProvider({children}: {children: ReactNode})  {
    const [user, setUser] = useState(null);

    //Ajouter les données utilisateur au contexte

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

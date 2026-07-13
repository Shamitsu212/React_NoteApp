import { createContext, useState, type ReactNode, type SetStateAction } from "react";
import type React from "react";

interface ContextProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<SetStateAction<boolean>>;

    notesOpen: boolean;
    setNotesOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const BurgerContext = createContext<ContextProps | null>(null);

interface ProviderProps {
    children: ReactNode;
}

export function BurgerProvider({ children }: ProviderProps) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(true);

    return (
        <BurgerContext.Provider value={{ menuOpen, setMenuOpen, notesOpen, setNotesOpen}}>
            {children}
        </BurgerContext.Provider>
    );
}
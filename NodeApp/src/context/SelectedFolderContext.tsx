import { createContext, useState, type ReactNode, type SetStateAction } from "react";
import type React from "react";

interface ContextProps {
    selected: string,
    setSelected: React.Dispatch<SetStateAction<string>>
}

export const SelectedFolderContext = createContext<ContextProps | null>(null)

interface ProviderProps {
    children: ReactNode
}

export function SelectedFolderProvider({children}:ProviderProps){

    const [selected, setSelected] = useState<string>("All")

    return(

        <SelectedFolderContext.Provider value={{selected, setSelected}}>
            {children}
        </SelectedFolderContext.Provider>
    )
} 
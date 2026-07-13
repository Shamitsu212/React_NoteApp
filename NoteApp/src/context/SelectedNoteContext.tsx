import { createContext, useState, type ReactNode, type SetStateAction } from "react";

import type React from "react";

interface ContextProps {
    selected: string,
    setSelected: React.Dispatch<SetStateAction<string>>
}

export const SelectedNoteContext = createContext<ContextProps | null>(null)

interface ProviderProps {
    children: ReactNode
}

export function SelectedNoteProvider({children}:ProviderProps){

    const [selected, setSelected] = useState<string>("All")

    return(

        <SelectedNoteContext.Provider value={{selected, setSelected}}>
            {children}
        </SelectedNoteContext.Provider>
    )
} 
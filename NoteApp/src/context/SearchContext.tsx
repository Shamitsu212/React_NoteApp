import { createContext, useState, type ReactNode, type SetStateAction } from "react";

import type React from "react";

interface ContextProps {
    search: string,
    setSearch: React.Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<ContextProps | null>(null)

interface ProviderProps {
    children: ReactNode
}

export function SearchProvider({children}:ProviderProps){

    const [search, setSearch] = useState<string>("")

    return(

        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
} 
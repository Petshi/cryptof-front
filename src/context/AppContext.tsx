import React from 'react';
import {AppContextType} from "../@types/app";

export const AppContext = React.createContext<AppContextType | null>(null)

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

return <AppContext.Provider value={children}>{children}</AppContext.Provider>

}
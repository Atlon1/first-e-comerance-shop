import React, {createContext, useState} from 'react';
import {SidebarContextType} from "../@types/context";


export const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProvider = ({children} : any) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <SidebarContext.Provider
        value={{isOpen,setIsOpen,handleClose}}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
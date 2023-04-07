import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {IoMdArrowForward, FiTrash2} from "react-icons/all";
import CartItem from "./CartItem";
import {SidebarContext} from "../context/SidebarContext";
import {SidebarContextType} from "../@types/context";


const Sidebar = () => {


     const {isOpen, handleClose} = useContext(SidebarContext) as SidebarContextType;


    return (
        <div>
            Siedebar
        </div>
    );
};

export default Sidebar;
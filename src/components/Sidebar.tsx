import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {IoMdArrowForward} from "react-icons/io";
import CartItem from "./CartItem";
import {SidebarContext} from "../context/SidebarContext";
import {SidebarContextType} from "../@types/context";
import {CartContext} from "../context/CartContext";


const Sidebar = () => {


    const {isOpen, handleClose} = useContext(SidebarContext) as SidebarContextType;
    console.log(useContext(CartContext))

    return (
        <div
            className={`${isOpen ? 'right-0' : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 borfer-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
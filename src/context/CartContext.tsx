import React, {createContext, useState, useEffect} from 'react';
import {CartContextType} from "../@types/context";



export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({children} : any) => {

    const [cart, setCart] =useState([]);


    const addToCart = (id : number) => {
        console.log(`item ${id} added to the cart`)
    }



    return (
        <CartContext.Provider value={{addToCart} as any}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
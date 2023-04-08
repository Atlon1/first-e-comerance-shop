import React, {createContext, useState, useEffect} from 'react';
import {CartContextType} from "../@types/context";


export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({children}: any) => {

    const [cart, setCart] = useState([]) as any;


    const addToCart = (id: number, product: any) => {
        const newItem = {...product, amount: 1}


        const cartItem = cart.find((item: any) => {

            return item.id === id
        })

        if (cartItem) {
            const newCart = [...cart].map((item: any) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {

            setCart([...cart, newItem])
        }
    }


    return (
        <CartContext.Provider value={{cart,addToCart} as any}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
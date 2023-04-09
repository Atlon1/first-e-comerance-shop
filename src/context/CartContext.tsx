import React, {createContext, useState, useEffect} from 'react';
import {CartContextType} from "../@types/context";


export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({children}: any) => {

    const [cart, setCart] = useState([]) as any;
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0) as any;

    useEffect(() => {
        const total = cart.reduce((acc: any, currentItem : any)=> {
            return acc + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total.toFixed(2))
    })

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc: any, currentItem: any) => {
                return acc + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])

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

    const removeFromCart = (id: number) => {
        const newCart = cart.filter((item: any) => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseAmount = (id: any) => {
        const cartItem = cart.find((item: any) => item.id === id)
        addToCart(id, cartItem)
    }

    const decreseAmount = (id: any) => {
        const cartItem = cart.find((item: any) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map((item: any) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1}
                } else {
                    return item
                }
            });
            setCart(newCart)
        }
        if (cartItem.amount < 2) {
            removeFromCart(id)

        }
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseAmount,
            decreseAmount,
            itemAmount,
            total
        } as any}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
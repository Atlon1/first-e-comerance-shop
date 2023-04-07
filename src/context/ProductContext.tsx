import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext(null) as any;


const ProductProvider = ({children}: any) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProduct(data)
        }
        fetchProducts()
    }, [])


    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
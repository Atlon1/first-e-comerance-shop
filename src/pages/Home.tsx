import React, {useContext} from 'react';
import {ProductContext} from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import UpArrow from "../components/UpArrow";

const Home = () => {

    const {products} : any  = useContext(ProductContext)

    const filteredProducts = products.filter((elem : any) => {
        return elem.category === "men's clothing" || elem.category === "women's clothing"
    })


    return (
        <div>
            <Hero/>
            <section className='py-16 bg-gray-500' id='product'>
               <div className="container mx-auto">
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                       {filteredProducts.map((product : any) => {
                           return <Product product={product} key={product.id}/>
                       })}
                   </div>
               </div>
            </section>
            <UpArrow/>
        </div>
    );
};

export default Home;
import React from 'react';
import WomanImg from '../assets/woman_hero.png'
// @ts-ignore
import {Link} from 'react-scroll';


const Hero = () => {
    return (
        <section className='h-[800px] bg-hero bg-no-repeat  bg-cover bg-center py-24'>
            <div className="container mx-auto flex justify-around h-full">
                <div className='flex flex-col justify-center'>
                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] bg-red-500 mr-3'/>
                        New Terend
                    </div>
                    <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                        Atomun SALE Stylish <br/>
                        <span className='font-semibold'>WOMENS</span>
                    </h1>
                    <Link
                        to="products"
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='self-start uppercase font-semibold border-b-2 border-primary cursor-pointer'>
                        Discover More
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <img src={WomanImg} alt=''/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
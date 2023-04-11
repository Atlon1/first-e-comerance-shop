import React from 'react';
import Logo from '../assets/Maciej_logo.png'

const Footer = () => {

        return (
            <footer className='bg-primary py-12'>
                <div className='container mx-auto flex flex-col items-center justify-center'>
                    <p className='text-white text-center'>
                        Copyright &copy; Ecommerce Shop 2023. All rights reserved.
                    </p>
                    <img className='max-w-[300px]' src={Logo} alt='Maciej'/>
                </div>
            </footer>
        )
    }


;

export default Footer;
import React, {useEffect, useState} from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';

// @ts-ignore
import {Link} from 'react-scroll';

const UpArrow = () => {

    const [isActive, setIsActive] = useState(true)

    useEffect(()=> {
        window.addEventListener('scroll', () => {
            window.scrollY > 150 ? setIsActive(true) : setIsActive(false)
        })
    })


    return (
        <section className={`${isActive ? 'fixed right-10 bottom-10' : 'opacity-0'} z-10 duration-500 transition-all`}>
            <Link to="hero"
                  activeClass='active'
                  smooth={true}
                  spy={true}>
                <BsFillArrowUpSquareFill className='text-6xl text-black cursor-pointer'/>
            </Link>

        </section>
    );
};

export default UpArrow;
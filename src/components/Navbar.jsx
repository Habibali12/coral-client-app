import React, { useState } from 'react'

import { IoIosSearch} from "react-icons/io";
import { FaBars, FaShoppingBag, FaUser, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {title: "Jewellery & Accessories", path: "/"},
        {title: "Clothing & Shoes", path: "/"},
        {title: "Home & Living", path: "/"},
        {title: "Wedding & Party", path: "/"},
        {title: "Toys & Entertainment", path: "/"},
        {title: "Art & Collectibes", path: "/"},
        {title: "Craft Supplies & Tools", path: "/"},
    ]

  return (
    <header className='max-w-screen-2xl xl:px-28 px-4'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <IoIosSearch className='text-dark w-5 h-5 cursor-pointer hidden md:block' />
            <Link to="/">Coral</Link>

            <div className='text-lg text-dark sm:flex items-center gap-4 hidden'>
                <Link className='flex items-center gap-2'><FaUser /> Account</Link>
                <Link className='flex items-center gap-2'><FaShoppingBag />Shopping</Link>
            </div>

            {/* Navigation for Small Devices */}
            <div>
                <button onClick={toggleMenu}>
                    {
                        isMenuOpen ? <FaTimes className='w-5 h-5 text-dark' /> : <FaBars className='w-5 h-5 text-dark' />
                    }
                </button>
            </div>
        </nav>

        <hr />

        {/* Navigation */}
        <div className='pt-4'>
            <ul className='lg:flex items-center justify-between text-dark hidden'>
                {
                    navItems.map(({title, path}) => (
                        <li key={title}><Link to={path} className='hover:text-orange-500'>{title}</Link></li>
                    ))
                }
            </ul>
        </div>


        {/* Mobile Menu Items */}
    </header>
  )
}

export default Navbar
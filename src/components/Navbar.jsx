import React, { useState } from 'react'

import { IoIosSearch} from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

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
    <header className='max-w-screen-2xl main-wrapper absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <IoIosSearch className='text-dark w-5 h-5 cursor-pointer hidden md:block' />
            <Link to="/">Coral</Link>

            <div className='text-lg text-dark sm:flex items-center gap-4 hidden'>
                <Link className='flex items-center gap-2'><VscAccount className='w-5 h-5' /> Account</Link>
                <Link className='flex items-center gap-2'><FiShoppingCart className='w-5 h-5' />Shopping</Link>
            </div>

            {/* Navigation for Small Devices */}
            <div className='sm:hidden'>
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
        <div>
            <ul className={`bg-dark text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                {
                    navItems.map(({title, path}) => (
                        <li key={title} className='my-3 '><Link to={path} className='hover:text-orange-500 cursor-pointer'>{title}</Link></li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

import CategoryOne from "../images/category/image1.png"
import CategoryTwo from "../images/category/image2.png"
import CategoryThree from "../images/category/image3.png"
import CategoryFour from "../images/category/image4.png"
import CategoryFive from "../images/category/image5.png"

const Category = () => {
  
  const companyLogo = [
    {id: 1, src: "../images/company/brand1.png"},
    {id: 2, src: "../images/company/brand2.png"},
    {id: 3, src: "../images/company/brand3.png"},
    {id: 4, src: "../images/company/brand4.png"},
    {id: 5, src: "../images/company/brand5.png"}
  ]

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>

        {/* Brand Logos */}

        <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
            {
                companyLogo.map(({id, src}) => (
                    <div><img key={id} src={src} alt="Brand Image" /></div>
                ))
            }
        </div>

        {/* Category Grid */}

        <div className='flex flex-col md:flex-row items-center gap-4 mt-8'>
            <div>
                <Link> <img src={CategoryOne} alt="Category Image" className='w-full hover:scale-105 transition-all duration-200' /> </Link>
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2'>
                    <Link> <img src={CategoryTwo} alt="Category Image" className='w-full hover:scale-105 transition-all duration-200'/> </Link>
                    <Link> <img src={CategoryThree} alt="Category Image" className='w-full hover:scale-105 transition-all duration-200'/> </Link>
                    <Link> <img src={CategoryFour} alt="Category Image" className='w-full hover:scale-105 transition-all duration-200'/> </Link>
                    <Link> <img src={CategoryFive} alt="Category Image" className='w-full hover:scale-105 transition-all duration-200'/> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
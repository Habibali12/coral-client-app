import React from 'react'

import BannerImg from "../images/banner.jpg"

const MainBanner = () => {
  return (
    <div className='bg-primary-bg py-12 xl:px-28 px-4'>
        <div className='max-w-screen-2xl main-wrapper py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
            <div className='md:w-1/2'>
                <img src={BannerImg} className='w-full' alt="Banner" />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collection</h1>
                <p className='text-xl mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse error vel similique iste, quam itaque nam veniam accusantium sequi cumque.</p>
                <button className='bg-dark hover:bg-orange-500 px-6 py-2 text-white'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default MainBanner
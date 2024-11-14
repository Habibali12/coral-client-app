import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ productsData }) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-col-1 items-center justify-center gap-12'>
        {
            productsData.slice(0, 8).map((item) => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.image} alt={item.title} className='mx-auto w-full hover:scale-105 transition-all duration-200' />
                    </Link>
                    <div className='mt-4 px-4'>
                        <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                        <div className='flex justify-between'>
                            <p className='text-dark/50'>{item.category}</p>
                            <p className='font-semibold'>${item.price}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductCard